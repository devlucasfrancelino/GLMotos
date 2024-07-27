import { Hero, CustomFilter, SearchBar, MotorcycleCard, NavBar } from "@/components";
import { fetchFipeMotorcycles } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allMotorcycles = await fetchFipeMotorcycles({ brands: "80", model: "9776", year: "2022-1" });

  const isDataEmpty = !Array.isArray(allMotorcycles) || allMotorcycles.length < 0 || !allMotorcycles;

  console.log(allMotorcycles)

  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Catálogo</h1>
          <p>Explore entre nossas diversas opções de motos para você</p>
        </div>

        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">
            <CustomFilter title="partida" />
            <CustomFilter title="ano" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__motorcycles-wrapper">
              {allMotorcycles?.map((motorcycle) => (
                <MotorcycleCard key={motorcycle} motorcycle={motorcycle} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results
            </h2>
          </div>
        )}

      </div>
    </main>
  );
}
