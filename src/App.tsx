import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import { PuppiesList } from "./components/Puppieslist";
import { Search } from "./components/Search";
import { ShortList } from "./components/Shortlist";

import { puppies } from "./data/puppies";
import { Puppy } from "./types";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy['id'][]>([1, 3])

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />

        <ShortList />
      </div>
      <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked} />

      <NewPuppyForm />

    </main>
  );
}
