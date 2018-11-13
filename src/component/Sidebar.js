/* List of imports */
import Drawer from "@material-ui/core/Drawer";
import React, { Component } from "react";
/**
 *
 * @class Sidebar
 * @extends Component
 */
class Sidebar extends Component {
    state = {
        open: true,
        query: "",
    };
    /**
     *
     * @memberof Sidebar
     */
    /* Refreshes the query */
    updateQuery = newQuery => {
        this.setState({ query: newQuery });
        this.props.filterVenues(newQuery);
    };
    /**
     *
     * @return
     * @memberof Sidebar
     */
    /* Help on sidebar provided by Drunkenkismet & Daphne */
    /* Renders the sidebar */
    render() {
        return (
            <Drawer
                open={this.props.open}
                style={{ width: "20vw" }}
                onClose={() => this.props.toggleDrawer()}>
                <button className="hamburger" onClick={() => this.props.toggleDrawer()}>
                    <i className="fas fa-bars" />
                </button>
                '
        <div className="filter" role="form" aria-label="filter list of map locations">
                    <div className="listHeader" role="search" aria-label="search">Search</div>
                    <div className="filterH">
                        <input
                            className="filterPlaceholderText"
                            type="text"
                            placeholder="Filter Map"
                            name="filter"
                            onChange={e => this.updateQuery(e.target.value)}
                            value={this.state.query}
                        />
                    </div>
                    <ul>
                        {this.props.filtered &&
                            this.props.filtered.map((venue, index) => {
                                return (
                                    <li key={index} tabindex="1">
                                        <button
                                            venue={venue}
                                            onClick={() => this.props.clickListItem(venue.venue.id)}
                                            className="venueList" role="list" aria-label="list of parks"
                                            key={index}>
                                            {venue.venue.name}
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </div>{" "}
            </Drawer>
        );
    }
}

export default Sidebar;

