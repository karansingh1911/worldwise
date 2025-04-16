import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <>
      <PageNav />
      <main className={styles.product}>
        <section>
          <img
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
          <div>
            <h2>About WorldWide.</h2>
            <p>
              Worldwise is a simple and intuitive location-tracking app that
              lets you easily mark places you&apos;ve visited and save them for
              future reference.
            </p>
            <p>
              Whether you&apos;re exploring new cities, revisiting favorite
              spots, or planning your next adventure, this app helps you create
              a personal map of your travels. Save locations with notes and
              photos, and track your journey all in one place!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
