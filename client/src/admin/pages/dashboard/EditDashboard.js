import React from 'react';
import AllEditPagesNavbar from '../partials/_all_edit_pages_navabar'
import Timer from '../RealTime/Time'
import './edit.style.css'
export default function EditDashboard() { //exporting this component into react app
    return (
        <div>
            <AllEditPagesNavbar />
                        <h1 className='welcome-title'>　〜　Wecome come Back Miho 〜　</h1>
            <Timer/>
        </div>
    );
}