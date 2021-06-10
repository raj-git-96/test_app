import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const teamReducer = createSlice({
  name: "teamReducer",
  initialState: {
    teamList: [],
    playersList: [],
  },
  reducers: {
    save: (state, action) => {
      let newRow = {
        ...action.payload,
        id: uniqid(),
        players: [],
      };
      state.teamList = [newRow, ...state.teamList];
    },
    deleteTeamById: (state, action) => {
      let teamIndex = state.teamList.findIndex(
        (el) => el.id === action.payload
      );
      state.teamList.splice(teamIndex, 1);
    },
    savePlayer: (state, action) => {
      if (!state.playersList) state.playersList = [];

      let teamIndex = state.teamList.findIndex(
        (el) => el.id === action.payload.team
      );

      let team = state.teamList[teamIndex];

      let newRow = {
        ...action.payload,
        id: uniqid(),
        team: team.name,
      };
      //   find team id
      team = {
        ...team,
        players: [...team.players, newRow],
      };

      state.teamList[teamIndex] = team;

      state.playersList = [newRow, ...state.playersList];
    },
    deletePlayerById: (state, action) => {
      let playerIndex = state.playersList.findIndex(
        (el) => el.id === action.payload.id
      );
      state.playersList.splice(playerIndex, 1);

      let teamIndex = state.teamList.findIndex(
        (el) => el.id === action.payload.teamId
      );
      let team = state.teamList[teamIndex];

      let teamPlayerIndex = team.players.findIndex((pl) => pl.id === action.payload.id);

      team.players.splice(teamPlayerIndex, 1);
      
      console.log("kkkkkkkkkkkkkkk", teamIndex, team, teamPlayerIndex);

      state.teamList[teamIndex] = team;
    },
  },
});

// Action creators are generated for each case reducer function
export const { save, deleteTeamById, savePlayer, deletePlayerById} =
  teamReducer.actions;

export default teamReducer.reducer;
