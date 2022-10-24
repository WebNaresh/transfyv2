import { React, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import UseContext from "../../../State/UseState/UseContext";

export default function Dept() {
  const { material, collegeMaterialForm, setCollegeMaterialForm } =
    useContext(UseContext);

  const filter = createFilterOptions();
  return (
    <>
      <Autocomplete
        value={collegeMaterialForm.Year}
        onChange={(event, newValue) => {
          console.log(newValue);
          if (typeof newValue === "string") {
            console.log(1);
            setCollegeMaterialForm((existed) => ({
              ...existed,
              Year: newValue.title,
            }));
          } else if (newValue && newValue.inputValue) {
            console.log(2);
            // Create a new value from the user input
            setCollegeMaterialForm((existed) => ({
              ...existed,
              Year: newValue.title,
            }));
          } else if (newValue === null) {
            console.log(3);
            console.log(newValue);
            setCollegeMaterialForm((existed) => ({
              ...existed,
              Year: null,
            }));
          } else {
            setCollegeMaterialForm((existed) => ({
              ...existed,
              Year: newValue.title,
            }));
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              Year: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={material.Year}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Year of Studying" />
        )}
      />
    </>
  );
}
