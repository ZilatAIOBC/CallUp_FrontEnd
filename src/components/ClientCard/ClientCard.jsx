import StarIcon from "@mui/icons-material/Star";
import "./ClientCard.css";

const ClientCard = (props) => {
  return (
    <div className="aai-testimonial-item w-72 sm:w-96 mx-5 border-b-4 border-red-600">
      <div className="aai-testimonial-item-top">
        <div className="flex items-center justify-between">
          <div className="aai-testimonial-quoate">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13566 10.6719C8.42933 9.30632 8.07617 7.82304 8.07617 6.22204C8.07617 4.5975 8.50585 3.25548 9.36521 2.196C10.2246 1.13652 11.5607 0.606773 13.3736 0.606773V2.83169C12.7379 2.83169 12.2729 2.97296 11.9786 3.25548C11.6843 3.53801 11.5372 4.07953 11.5372 4.88003V5.23319H14.1152V10.6719H9.13566ZM1.82511 10.6719C1.11878 9.30632 0.76562 7.82304 0.76562 6.22204C0.76562 4.5975 1.1953 3.25548 2.05466 2.196C2.91402 1.13652 4.25015 0.606773 6.06304 0.606773V2.83169C5.42735 2.83169 4.96236 2.97296 4.66805 3.25548C4.37376 3.53801 4.2266 4.07953 4.2266 4.88003V5.23319H6.80468L6.80468 10.6719H1.82511Z"
                fill="#747681"
              />
            </svg>
          </div>
          <div className="aai-awards-stars">
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
          </div>
        </div>
        <p className="aai-testimonial-desc">{props.review}</p>
      </div>
      <div className="aai-testimonial-item-bottom flex items-center">
        <div>
          <h4 className="aai-testimonial-author-name">{props.client}</h4>
          <span className="aai-testimonial-author-title">{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
