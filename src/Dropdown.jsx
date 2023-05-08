import { FormControl, InputLabel, NativeSelect } from "@mui/material";

export const Dropdown = ({ users, setFilteredUsers }) => {
  const handleFilterChange = (event) => {
    const filteredUsers = [];
    const filter = event.target.value;

    if (filter === "Show All") {
      setFilteredUsers(users);
    }

    const allButtons = Array.from(document.querySelectorAll("button"));
    const buttons = allButtons.filter((button) => button.innerHTML === filter);
    const ids = [];
    buttons.map((button) => ids.push(Number(button.dataset.id)));

    users.forEach((user) => {
      if (ids.includes(Number(user.id))) {
        filteredUsers.push(user);
      }
    });

    setFilteredUsers(filteredUsers);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Filter
      </InputLabel>
      <NativeSelect
        onChange={handleFilterChange}
        inputProps={{
          name: "filter",
          id: "uncontrolled-native",
        }}
      >
        <option>Show All</option>
        <option>Follow</option>
        <option>Following</option>
      </NativeSelect>
    </FormControl>
  );
};
