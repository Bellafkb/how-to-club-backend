import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var EventSchema = new Schema({
    city: { type: String },
    name: {
        text: {
            type: String
        },
        html: {
            type: String
        }
    },
    description: {
        text: {
            type: String
        },
        html: {
            type: String
        }
    },
    id: {
        type: String
    },
    url: {
        type: String
    },
    vanity_url: {
        type: String
    },
    start: {
        timezone: {
            type: String
        },
        local: {
            type: Date
        },
        utc: {
            type: Date
        }
    },
    end: {
        timezone: {
            type: String
        },
        local: {
            type: Date
        },
        utc: {
            type: Date
        }
    },
    organization_id: {
        type: String
    },
    created: {
        type: Date
    },
    changed: {
        type: Date
    },
    published: {
        type: Date
    },
    capacity: {
        type: String
    },
    capacity_is_custom: {
        type: String
    },
    status: {
        type: String
    },
    currency: {
        type: String
    },
    listed: {
        type: Boolean
    },
    shareable: {
        type: Boolean
    },
    online_event: {
        type: Boolean
    },
    tx_time_limit: {
        type: Number
    },
    hide_start_date: {
        type: Boolean
    },
    hide_end_date: {
        type: Boolean
    },
    locale: {
        type: String
    },
    is_locked: {
        type: Boolean
    },
    privacy_setting: {
        type: String
    },
    is_series: {
        type: Boolean
    },
    is_series_parent: {
        type: Boolean
    },
    inventory_type: {
        type: String
    },
    is_reserved_seating: {
        type: Boolean
    },
    show_pick_a_seat: {
        type: Boolean
    },
    show_seatmap_thumbnail: {
        type: Boolean
    },
    show_colors_in_seatmap_thumbnail: {
        type: Boolean
    },
    source: {
        type: String
    },
    is_free: {
        type: Boolean
    },
    version: {
        type: String
    },
    summary: {
        type: String
    },
    logo_id: {
        type: String
    },
    organizer_id: {
        type: String
    },
    venue_id: {
        type: String
    },
    category_id: {
        type: String
    },
    subcategory_id: {
        type: String
    },
    format_id: {
        type: String
    },
    resource_uri: {
        type: String
    },
    is_externally_ticketed: {
        type: Boolean
    },
    logo: {
        crop_mask: {
            top_left: {
                x: {
                    type: Number
                },
                y: {
                    type: Number
                }
            },
            width: {
                type: Number
            },
            height: {
                type: Number
            }
        },
        original: {
            url: {
                type: String
            },
            width: {
                type: Number
            },
            height: {
                type: Number
            }
        },
        id: {
            type: String
        },
        url: {
            type: String
        },
        aspect_ratio: {
            type: String
        },
        edge_color: {
            type: String
        },
        edge_color_set: {
            type: Boolean
        }
    }

});

export default mongoose.model('Event', EventSchema);
