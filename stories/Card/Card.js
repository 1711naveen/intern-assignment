import './Card.css'

const Card = () => {
    return (
        <>
            <div className="outerbox mx-5">
                <div className="card" style={{ height: "412px", width: "340px" }}>
                    <img src="rectangle-31@2x.png" className="card-img-top" alt="..." width="340" height="190" />
                    <div className="card-body">
                        <b><h5 className="card-title" style={{ fontSize: "16px" }}>Bank Entrance-front-view Camera1</h5></b>
                        <div className="container" style={{ fontSize: "13px" }}>
                            <div className="container p-2"  >
                                <img className='mr-2' src="carbon_task-tools.svg" alt="" />
                                3 Recipes Added
                            </div>
                            <div className="container p-2">
                                <img className='mr-2' src="fluent_clipboard-error-16-regular.svg" alt="" />
                                today, 04:45pm: Unidentified face detected
                            </div>
                            <div className="container p-2">
                                <img className='mr-2' src="tdesign_location.svg" alt="" />
                                Coimbatore branch
                            </div>
                        </div>
                        <div className="box1">
                            <button type="button" className="btn btn-success btn-sm m-2">Active</button>
                            <img className='mt-2' src="material-symbols_delete-outline.png" alt="" />
                            <img className='mt-2' src="bxvideorecording.svg" alt="" />
                            <img className='mt-2' src="mdi_graph-box.svg" alt="" />
                        </div>

                    </div>
                </div>

                <div className="card2 mx-5">
                    <img src='/fluent_clipboard-task-add-24-regular.svg' alt="" width="48" height="48" />
                    <div className="recipe">
                        Recipe Management
                    </div>
                    <div className="coner">
                        Manage
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card