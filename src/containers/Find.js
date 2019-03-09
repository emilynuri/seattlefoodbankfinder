import React from 'react';
import './Find.css';
import SubNavigation from '../components/SubNavigation';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
import $ from "jquery";
import crossfilter from 'crossfilter';
Geocode.setApiKey("AIzaSyD2qoh-Bvtob6Dyh23-tfUTKfMnOPQr3k8");
Geocode.enableDebug();

const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '550px'
};

var cross, all_group, original_data, daytime_dimension, daytime_group, meal_dimension, meal_group, people_dimension, people_group, location_dimension, location_group;

var add_func = function (p, v) {
    p.data.push(v);
    ++p.count;
    return p;
},
    remove_func = function (p, v) {
        --p.count;
        p.data.pop(v);
        return p;
    },
    init_func = function (p, v) {
        return { count: 0, data: [] };
    }
class Find extends React.Component {
    state = { data: "", selected_item: { lat: "", lng: "" }, people_served_array: "", location_array: "", daytime_array: "" };
    constructor(props) {
        super(props);
        let _this = this;
        $.ajax({
            url: "https://data.seattle.gov/resource/47rs-c243.json",
            type: "GET"
        }).done(function (result) {
            if (result.length > 0) {
                var meal_data = result;
                for (var i = 0; i < meal_data.length; i++) {
                    var location_pos = _this.getPositionFromAddress(meal_data[i].location);
                    if (location_pos == null) {
                        meal_data[i]["lat"] = "15.218697";
                        meal_data[i]["lng"] = "-14.472251";
                    }
                    else {
                        meal_data[i]["lat"] = location_pos.lat;
                        meal_data[i]["lng"] = location_pos.lng;
                    }
                }
                _this.setState({ data: meal_data, selected_item: meal_data[0] });
                original_data = meal_data;
                cross = crossfilter(original_data);
                meal_dimension = cross.dimension(function (d) { return d.meal_served; });
                meal_group = meal_dimension.group().reduce(add_func, remove_func, init_func);
                daytime_dimension = cross.dimension(function (d) { return d.day_time; });
                daytime_group = daytime_dimension.group().reduce(add_func, remove_func, init_func);
                people_dimension = cross.dimension(function (d) { return d.people_served; });
                people_group = people_dimension.group().reduce(add_func, remove_func, init_func);
                location_dimension = cross.dimension(function (d) { return d.location; });
                location_group = location_dimension.group().reduce(add_func, remove_func, init_func);
                all_group = cross.groupAll().reduce(add_func, remove_func, init_func);
            }
        });
        $.ajax({
            url: "https://data.seattle.gov/resource/47rs-c243.json?$select=people_served&$group=people_served",
            type: "GET"
        }).done(function (result) {
            _this.setState({ people_served_array: result });
        });
        $.ajax({
            url: "https://data.seattle.gov/resource/47rs-c243.json?$select=day_time&$group=day_time",
            type: "GET"
        }).done(function (result) {
            _this.setState({ daytime_array: result });
        });
        $.ajax({
            url: "https://data.seattle.gov/resource/47rs-c243.json?$select=location&$group=location",
            type: "GET"
        }).done(function (result) {
            _this.setState({ location_array: result });
        });
    }
    getPositionFromAddress = (address) => {
        return null;
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                return { lat: lat, lng: lng };
            },
            error => {
                console.error(error);
                return null;
            }
        );
    }
    filterData = (filter_type, filter_value) => {
        meal_dimension.filter(null);
        daytime_dimension.filter(null);
        people_dimension.filter(null);
        location_dimension.filter(null);
        $("#filter-meal-options input").each(function () {
            if ($(this).prop("checked"))
                meal_dimension.filter($(this).val());
        });
        $("#filter-daytime-options input").each(function () {
            if ($(this).prop("checked"))
                daytime_dimension.filter($(this).val());
        });
        $("#filter-people-options input").each(function () {
            if ($(this).prop("checked"))
                people_dimension.filter($(this).val());
        });
        $("#filter-location-options input").each(function () {
            if ($(this).prop("checked"))
                location_dimension.filter($(this).val());
        });
        this.setState({ data: all_group.value().data });
    }
    componentDidMount = () => {
        let _this = this;
        $("#filter-meal-options input").on("click", function () {
            _this.filterData("meal", $(this).val());
        })
    }
    clickedOnFilteredItem = (clicked_filtered_item_index) => {
        this.setState({ selected_item: this.state.data[clicked_filtered_item_index] });
    }
    render() {
        var filtered_list = [];
        for (var i = 0; i < this.state.data.length; i++) {
            var filtered_item = <li onClick={this.clickedOnFilteredItem.bind(this, i)} className='foodbankfinder-filtered-list-item' key={i}>{this.state.data[i].name_of_program}</li>;
            filtered_list.push(filtered_item);
        }
        var map_markers = [];
        for (var i = 0; i < this.state.data.length; i++) {
            var map_marker = <Marker
                title={this.state.data[i].name_of_program}
                name={this.state.data[i].name_of_program}
                position={{ lat: this.state.data[i].lat, lng: this.state.data[i].lng }} />
            map_markers.push(map_marker);
        }
        var filter_people = [];
        for (var i = 1; i < this.state.people_served_array.length; i++) {
            var filtered_people = <li><input value={this.state.people_served_array[i].people_served} onClick={this.filterData.bind(this, "people", this.state.people_served_array[i].people_served)} type="checkbox" name="people_served" />{this.state.people_served_array[i].people_served}</li>
            filter_people.push(filtered_people);
        }
        var filter_location = [];
        for (var i = 1; i < this.state.location_array.length; i++) {
            var filtered_location = <li><input value={this.state.location_array[i].location} onClick={this.filterData.bind(this, "location", this.state.location_array[i].location)} type="checkbox" name="location" />{this.state.location_array[i].location}</li>
            filter_location.push(filtered_location);
        }
        var filter_daytime = [];
        for (var i = 1; i < this.state.daytime_array.length; i++) {
            var filtered_daytime = <li><input value={this.state.daytime_array[i].day_time} onClick={this.filterData.bind(this, "daytime", this.state.daytime_array[i].day_time)} type="checkbox" name="daytime" />{this.state.daytime_array[i].day_time}</li>
            filter_daytime.push(filtered_daytime);
        }
        return (
            <div>
                <SubNavigation />
                <div class="page-find">
                    <div class="container pt-3">
                        <div id="foodbankfinder">
                            <div id="foodbankfinder-heading">
                                <p>Use the following filters to find a food bank best suited for you!</p>
                            </div>
                            <div id="foodbankfinder-body">
                                <div id="foodbankfinder-filter">
                                    <div id="foodbankfinder-filter-daytime">
                                        <p className="filter-type-name">Day/Time</p>
                                        <div id="filter-daytime-options" className="filter-options">
                                            {filter_daytime}
                                        </div>
                                    </div>
                                    <div id="foodbankfinder-filter-meal">
                                        <p className="filter-type-name">Meal served</p>
                                        <div id="filter-meal-options" className="filter-options">
                                            <li><input type="checkbox" name="meal_served" value="Breakfast" />Breakfast</li>
                                            <li><input type="checkbox" name="meal_served" value="Lunch" />Lunch</li>
                                            <li><input type="checkbox" name="meal_served" value="Dinner" />Dinner</li>
                                        </div>
                                    </div>
                                    <div id="foodbankfinder-filter-people">
                                        <p className="filter-type-name">People served</p>
                                        <div id="filter-people-options" className="filter-options">
                                            {filter_people}
                                        </div>
                                    </div>
                                    <div id="foodbankfinder-filter-location">
                                        <p className="filter-type-name">Location</p>
                                        <div id="filter-location-options" className="filter-options">
                                            {filter_location}
                                        </div>
                                    </div>
                                </div>
                                <div id="foodbankfinder-map">
                                    <div id="foodbankfinder-map-heading">
                                        <p>After selecting the filters on the left to specify needs around food bank timings, location, people served and food type, use the interface map below to isolate the location of the food banks.</p>
                                        <p>Zoom IN to find food banks within a specified region and zoom OUT to increase the range of avaliable Food banks.</p>
                                    </div>
                                    <div id="foodbankfinder-map-view">
                                        <Map google={this.props.google} zoom={5} center={{ lat: this.state.selected_item.lat, lng: this.state.selected_item.lng }} initialCenter={{ lat: this.state.selected_item.lat, lng: this.state.selected_item.lng }} style={mapStyles}>
                                            {map_markers}
                                        </Map>
                                    </div>
                                </div>
                                <div id="foodbankfinder-list">
                                    <div id="foodbankfinder-list-result">
                                        {filtered_list}
                                    </div>
                                    <div id="foodbankfinder-list-item">
                                        <p id="foodbankfinder-selected-item-name">{this.state.selected_item.name_of_program}</p>
                                        <p id="foodbankfinder-selected-item-locatioin" className="grey-text">{this.state.selected_item.location}</p>
                                        <p id="foodbankfinder-selected-item-daytime">Day / Time <span className="grey-text">{this.state.selected_item.day_time}</span></p>
                                        <p id="foodbankfinder-selected-item-meal_served">Meal served <span className="grey-text">{this.state.selected_item.meal_served}</span></p>
                                        <p id="foodbankfinder-selected-item-people_served">People served <span className="grey-text">{this.state.selected_item.people_served}</span></p>
                                        <div id="foodbankfinder-selected-item-contact">
                                            <p>Contact information</p>
                                            <p className="grey-text">E-mail:contact@marysplace.com</p>
                                            <p className="grey-text">Phone: xxx-xxx-xxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBul1RgCtQp0m5f8nibxzLnGRZSxG0C2vk')
})(Find)
