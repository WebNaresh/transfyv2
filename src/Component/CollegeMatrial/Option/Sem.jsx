import { React, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import UseContext from "../../../State/UseState/UseContext";
import MaterialContext from "../../../State/Material/MaterialContext";

export default function Dept() {
  const { material, collegeMaterialForm, setCollegeMaterialForm } =
    useContext(UseContext);
  const { handleSemesterAutoComplete } = useContext(MaterialContext);

  const filter = createFilterOptions();
  return (
    <>
      <Autocomplete
        value={collegeMaterialForm.Semester}
        onChange={handleSemesterAutoComplete}
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
              Semester: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={
          collegeMaterialForm.Year === "1st Year"
            ? material.Semfor1stYear
            : collegeMaterialForm.Year === "2nd Year"
            ? material.Semfor2ndYear
            : collegeMaterialForm.Year === "3rd Year"
            ? material.Semfor3rdYear
            : material.Sem
        }
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
          <TextField {...params} label="Semester of Studying" />
        )}
      />
    </>
  );
}
