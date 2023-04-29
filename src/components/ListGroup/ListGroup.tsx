import { useState } from "react";
import styled from "styled-components";

// {items: [], heading: string}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// destructure props: Props into { items, heading }: Props
function ListGroup({ items, heading, onSelectItem }: Props) {
  // in JSX, we don't have for loop
  // remember, inside JSX, we can't use if statement, unless have curly brackets

  // () => {} : function without parameters

  // how to avoid null >>> {items.length === 0 ? <p>No item found</p> : null}
  // ex: {items.length === 0 && <p>No item found</p>}
  // if result is true && 'Mosh', i will return 'Mosh'
  // if result is false && 'Mosh', i will return false

  // Event handler
  // const handleClick = (e: MouseEvent) => console.log(e);

  // hook
  // selectedIndex = variable state
  // setSelectedIndex = function
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            // just handleClick instead handleClick()
            // just pass reference
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
