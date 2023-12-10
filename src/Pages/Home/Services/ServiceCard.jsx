import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className="text-[#FF3811] text-xl">Price: ${price}</p>
                <button className="btn"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default ServiceCard;