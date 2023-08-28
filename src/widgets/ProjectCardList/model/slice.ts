import { createSlice } from "@reduxjs/toolkit";
import { ProjectsState } from "./types.ts";

const initialState: ProjectsState = {
  projects: [1, 2, 3],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});
