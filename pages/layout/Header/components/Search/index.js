import styles from "./Search.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/index.js";
import { useRouter } from 'next/router'

export default function Search(props) {
  const { data } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const searchAction = (href) => {
    console.log('to search action, and close menu', href)
    if (href && href.length) {
      router.push(href)
    }
    // TODO
    setSearchBarVisible(false);
  }
  return (
    <>
      {!searchBarVisible ? (
        <div
          className={styles.searchIcon}
          onClick={() => setSearchBarVisible(true)}
        >
          <Image src={`/search.png`} width="22" height="22" />
        </div>
      ) : (
        <SearchBar data={data} searchAction={searchAction}/>
      )}
    </>
  );
}
