import React from 'react'
import './Table.css'
import '../../app/bootstrap.css'

const Table = () => {
    return (
        <div className='container mt-5 text-center' style={{backgroundColor:'pink'}}>
            <table className='table '>
                <thead className='table-secondary'>
                    <tr >
                        <th scope="col" >Name</th>
                        <th scope="col" >Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Location</th>
                        <th scope="col">Last Active</th>
                        <th scope="col">Permission</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peter John</td>
                        <td>Peter@gmail.com</td>
                        <td>Owner</td>
                        <td>Adam Stall
                            <div className='text'>Coimbatore</div>
                        </td>
                        <td>Sep 13, 2023 5:51 PM</td>
                        <td>All Permissions</td>
                        <td><button type="button" className="btn btn-success btn-sm">Active</button></td>
                        <td><img src="tableredit.svg" alt="" /> <img src="material-symbols_delete-outline.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Lingan</td>
                        <td>Lin@gmail.com</td>
                        <td>Executive</td>
                        <td>MMDA
                            <div className='text'>Coimbatore</div>
                        </td>
                        <td>Today, 2023 2:11 PM</td>
                        <td>3 Permissions</td>
                        <td><button type="button" className="btn btn-success btn-sm">Active</button></td>
                        <td><img src="tableredit.svg" alt="" /> <img src="material-symbols_delete-outline.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Adam@gmail.com</td>
                        <td>Admin</td>
                        <td>DEO Office
                            <div className='text'>Delhi</div>
                        </td>
                        <td>Sep 13, 2023 5:51 PM</td>
                        <td>6 Permissions</td>
                        <td><button type="button" className="btn btn-success btn-sm">Active</button></td>
                        <td><img src="tableredit.svg" alt="" /> <img src="material-symbols_delete-outline.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Smith</td>
                        <td>Smith@gmail.com</td>
                        <td>Supervisor</td>
                        <td>Plot Hub
                            <div className='text'>Coimbatore</div>
                        </td>
                        <td>Sep 13, 2023 5:51 PM</td>
                        <td>5 Permissions</td>
                        <td><button type="button" className="btn btn-success btn-sm">Active</button></td>
                        <td><img src="tableredit.svg" alt="" /> <img src="material-symbols_delete-outline.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>John Abraham</td>
                        <td>Jhon@gmail.com</td>
                        <td>Executive</td>
                        <td>CA
                            <div className='text'>Coimbatore</div>
                        </td>
                        <td>Sep 13, 2023 5:51 PM</td>
                        <td>2 Permissions</td>
                        <td><button type="button" className="btn btn-danger btn-sm">Inactive</button></td>
                        <td><img src="tableredit.svg" alt="" /> <img src="material-symbols_delete-outline.png" alt="" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table