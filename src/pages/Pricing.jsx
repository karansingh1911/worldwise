// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Pricing() {
  return (
    <>
      <PageNav />
      <main className={styles.product}>
        <section>
          <div>
            <h2>
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p>
              Discover the freedom to explore with our intuitive location
              tracking service! Choose from our flexible pricing options
              tailored to fit your needs. Our Basic Plan is free, allowing you
              to mark and save up to 10 locations. For avid travelers and
              explorers, our Premium Plan offers unlimited location saving,
              advanced features like personalized maps, and exclusive content
              for just $4.99 per month. Ready to elevate your adventures? Sign
              up today and never lose track of your favorite places again!
            </p>
          </div>
          <img
            src="img-2.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </section>
      </main>
    </>
  );
}
