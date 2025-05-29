import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import { PuppiesList } from "./components/PuppiesList";
import { Search } from "./components/Search";
import { ShortList } from "./components/ShortList";

import { puppies as puppiesData } from "./data/puppies";
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
  const [liked, setLiked] = useState<Puppy['id'][]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData)

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <ShortList puppies={puppies} liked={liked} setLiked={setLiked} />
      </div>
      <PuppiesList searchQuery={searchQuery} puppies={puppies} liked={liked} setLiked={setLiked} />

      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />

    </main>
  );
}
