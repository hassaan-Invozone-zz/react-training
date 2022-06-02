import { Menu } from "@headlessui/react";

const Home = () => {
  return (
    <>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Items>
          <div>
            <p>Signed in as</p> <p className="font-medium">Evan</p>
          </div>
          <Menu.Item
            as="div"
            onClick={() => {
              alert("Showing Alert");
            }}
          >
            Show alert
          </Menu.Item>
          <Menu.Item disabled as="div">
            This item is disabled.
          </Menu.Item>
          <Menu.Item as="a" href="/settings">
            View settings
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default Home;
