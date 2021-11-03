import styles from "./SearchBar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { useRouter } from "next/router";

export default function SearchBar(props) {
  const { data } = props;
  const router = useRouter();
  const [inputItems, setInputItems] = useState(data);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    openMenu,
    getItemProps,
    closeMenu,
  } = useCombobox({
    items: inputItems,
    initialIsOpen: true,
    onInputValueChange: ({ inputValue }) => {
      if (inputValue.length > 1) {
        setInputItems(
          data.filter((item) =>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      } else {
        setInputItems(data);
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      router.push("/" + selectedItem.href);
      closeMenu();
    },
    itemToString: () => "",
  });

  let currentIndex = 0;

  return (
    <div className={styles.searchGrid}>
      <div className={styles.searchContent} {...getComboboxProps()}>
        <input
          placeholder="enter name"
          id="search-input"
          {...getInputProps()}
          onFocus={() => openMenu()}
          onClick={() => openMenu()}
        />
        <div className={styles.activeIcon} {...getToggleButtonProps()}>
          <Image src={`/searchaction.png`} width="20" height="20" />
        </div>
      </div>
      {isOpen && (
        <ul className={styles.menuStyles} {...getMenuProps()}>
          {inputItems
            .filter((item) => !item.parent)
            .map((item, index) => {
              const subContent = inputItems.filter(
                (inputItem) => inputItem.parent === item.title
              );
              const root = (
                <li
                  className={styles.menuItem}
                  key={`${item.title}${index}`}
                  {...getItemProps({
                    item,
                    index: currentIndex++,
                    key: item.title,
                  })}
                >
                  {item.title}
                </li>
              );
              if (subContent.length > 0) {
                return (
                  <>
                    {root}
                    {/* <ul className={styles.InsideMenuStyles}> */}
                    {subContent.map((subItem, subIndex) => {
                      return (
                        <li
                          className={`${styles.menuItem} ${styles.menuInsideItem}`}
                          key={`${subItem.title}${subIndex}`}
                          {...getItemProps({
                            item: subItem,
                            index: currentIndex++,
                            key: subItem.title,
                          })}
                        >
                          {subItem.title}
                        </li>
                      );
                    })}
                    {/* </ul> */}
                  </>
                );
              }
              return root;
            })}
          {inputItems.filter((item) => !item.parent).length === 0 &&
            inputItems
              .filter((item) => item.parent)
              .map((item, index) => {
                return (
                  <li
                    className={styles.menuItem}
                    key={`${item.title}${index}`}
                    {...getItemProps({
                      item,
                      index: currentIndex++,
                      key: item.title,
                    })}
                  >
                    {item.title}
                  </li>
                );
              })}
        </ul>
      )}
    </div>
  );
}
