import React from "react";
import Card from "../card/Card.jsx";
import eventData from "../data/events.js";

const Events = () => {
    return (
        <>

            <h1 className="text-5xl font-bold text-center mt-15 text-blue-500 ">SAE Events</h1>
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-25 mx-auto mt-4.5"></div>
            <h1 className="text-1xl  text-center mt-5 text-gray ">Explore our technical workshops, competitions, and networking events</h1>
            <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {eventData.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md"
                        >
                            <Card
                                id={event.id}
                                Name={event.Name}
                                Date={event.date}
                                Venue={event.Venue}
                                Description={event.description}
                                Image={event.Image}
                                RegisterLink={event.RegisterLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Events;