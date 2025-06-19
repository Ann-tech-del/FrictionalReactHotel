import listingData from "../../data/listing-data";

function ListingItem({ image, title, description, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <div className="card-price">
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}

function Listing() {
  return (
    <section className="card-grid">
      {listingData.map((listing, index) => {
        return (
          <ListingItem
            key={index}
            image={listing.Image}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />
        );
      })}
    </section>
  );
}

export default Listing;
S



