import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var eventBriteSchema = new Schema(
    {
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
        start: {
            timezone: {
                type: String
            },
            local: {
                type: String
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
                type: String
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
            type: Object
        },
        capacity_is_custom: {
            type: Object
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
            type: Object
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
        venue: {
            address: {
                address_1: {
                    type: String
                },
                address_2: {
                    type: Object
                },
                city: {
                    type: String
                },
                region: {
                    type: Object
                },
                postal_code: {
                    type: String
                },
                country: {
                    type: String
                },
                latitude: {
                    type: String
                },
                longitude: {
                    type: String
                },
                localized_address_display: {
                    type: String
                },
                localized_area_display: {
                    type: String
                },
                localized_multi_line_address_display: {
                    type: [
                        String
                    ]
                }
            },
            resource_uri: {
                type: String
            },
            id: {
                type: String
            },
            age_restriction: {
                type: Object
            },
            capacity: {
                type: Object
            },
            name: {
                type: String
            },
            latitude: {
                type: String
            },
            longitude: {
                type: String
            }
        }
    }
);

export default mongoose.model('EventBrite', eventBriteSchema);
