import styles from "./SearchBar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
  const { data, searchAction } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [inputProps, setInputProps] = useState({ value: "", href: "" });

  useEffect(() => {
    // document.getElementById("search-input").focus();
  }, []);

  const navigateTo = () => {
    console.log("navigate", inputProps);
    searchAction(inputProps?.href);
  };

  return (
    <div className={styles.searchGrid}>
      <div className={styles.searchContent}>
        <input
          placeholder="enter name"
          value={inputProps?.value ?? ""}
          id="search-input"
          onchange={(e) => {
            setInputProps({ ...inputProps, value: e.target.value });
          }}
        />
        <div className={styles.searchIcon} onClick={() => navigateTo()}>
          <Image src={`/searchaction.png`} width="20" height="20" />
        </div>
      </div>
      <ul className={styles.menuStyles}>
        {isOpen &&
          data.map((item, index) => {
            if (item?.subContent.length) {
              return (
                <>
                  <li
                    className={styles.menuItem}
                    key={`${item}${index}`}
                    onClick={() =>
                      setInputProps({
                        ...inputProps,
                        value: item?.title,
                        href: item?.href,
                      })
                    }
                  >
                    {item.title}
                  </li>
                  <ul className={styles.InsideMenuStyles}>
                    <li
                      className={styles.menuItem}
                      key={`${item}${index}-all`}
                      onClick={() =>
                        setInputProps({
                          ...inputProps,
                          value: "All",
                          href: item?.href,
                        })
                      }
                    >
                      All
                    </li>
                    {item.subContent.map((item, index) => {
                      return (
                        <li
                          className={styles.menuItem}
                          key={`${item}${index}`}
                          onClick={() =>
                            setInputProps({
                              ...inputProps,
                              value: item?.title,
                              href: item?.href,
                            })
                          }
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            }
            return (
              <li
                className={styles.menuItem}
                key={`${item}${index}`}
                onClick={() =>
                  setInputProps({
                    ...inputProps,
                    value: item?.title,
                    href: item?.href,
                  })
                }
              >
                {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
