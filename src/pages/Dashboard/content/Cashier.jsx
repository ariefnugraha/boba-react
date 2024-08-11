import { useState } from "react"

export default function Cashier() {
    const [listOrder, setListOrder] = useState([]);
    return (
        <div className="row">
            <div className="col-9">
                <div className="bg-white rounded-2 p-5">
                    <p className="fw-bold fs-3">Categories</p>

                    <div className="category-list row mt-2">
                        <div className="item col">
                            <p>Boba</p>
                            <p className="mt-3">10 Item</p>
                        </div>
                    </div>
                </div>
                {listOrder.length}
            </div>

            <div className="col-3"></div>
        </div>
    )
}