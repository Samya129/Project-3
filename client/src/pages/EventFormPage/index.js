import React from "react";
import Navbar from "../CommunityNavbar";
import CommunityJumbo from "../CommunityJumbotron";
import CommunityCards from "../CommunityCards";
import DatePicker from "../DatePicker";
import "./style.css"
import "react-datepicker/dist/react-datepicker.css";

function EventFormPage() {
    return (
        <main>
        <div>
            <Navbar/>
            < div className="container jumbotronContainer">
                <CommunityJumbo/>
                <h3 
                    class="900 text-red rounded-lg p-4">
                    <span class="block text-blue-200 xl:inline">
                        Where you can help make real change... 
                    </span>
                    <div><br /> <br /></div>
                    <span class="block text-blue xl:inline">
                         and help make sure everyone has the right to vote...   
                    </span>
                </h3>

            </div>
            <div><br /> <br /></div>
            
            <div class="form-container w-full pl-16 form font-extrabold">
                <form class=" pl-8">
                    <label class="block">
                    <span class="text-gray-700">Title of the Event?:</span>
                        <input /> class="form-input mt-1 block w-full" placeholder="Event Name
                        
                    </label>

                    <div class="mt-4" id="eventSelectEvent">
                        <span class="text-gray-700">Select Event</span>
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input /> type="radio" class="form-radio text-red-600"  name="selectEvent" value="organize-a-rally" checked
                                 <span class="ml-2">Organize a Rally</span>
                                 
                            </label>
                            <label class="inline-flex items-center">
                                <input /> type="radio" class="form-radio text-white-600"  name="selectEvent" value="start-a-petition" checked
                                 <span class="ml-2">Start a Petition</span>
                                 
                            </label>
                            <label class="inline-flex items-center">
                                <input /> type="radio" class="form-radio text-blue-600"  name="selectEvent" value="contact-local-senator" checked
                                 <span class="ml-2">Contact local Senator</span>
                                 
                            </label>
                        </div>
                        <div><br /> <br /></div>
                        <label class="block">
                    <span class="text-gray-700">What will be taking place at this event?:</span>
                    <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Event Description Here">
                        </textarea>
                    </label>
                        <div><br /> <br /></div>
                        <label class="block">
                    <span class="text-gray-700">Select Event Date:</span>
                        <input />
                            <DatePicker/>
                        
                    </label>
                        <div><br /> <br /></div>
                        <label class="block">
                    <span class="text-gray-700">Event Location?:</span>
                        <input /> class="form-input mt-1 block w-full" placeholder="Event Location
                        
                    </label>
                        <div><br /> <br /></div>
                        <label class="block">
                    <span class="text-gray-700">Take more Action!:</span>
                    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="Event additionanl information here:"></textarea>
                    </label>
                        <div><br /> <br /></div>
                    </div>
                </form>
            </div>    
                <div 
                    class="p-2 text-white-800">
                    <button 
                        id="submitBtn" class="mx-4xl m-3 new-post-submit">Submit
                    </button> 
                </div>
            </div>
            <div>
            <CommunityCards/>
        </div>
    </main>
);
}

export default EventFormPage;
