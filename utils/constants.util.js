const WICKET_TYPES = {
  BOWLED: "bowled",
  LbW: "lbw",
  CAUGHT_BOWLED: "caught and bowled",
};

const FIELDING_TYPES = {
  CAUGHT: "caught",
  STUMPING: "stumping",
  RUN_OUT: "run_out",
};

const BOWLING_POINTS = {
  WICKET: 25,
  BONUS: 8,
  THREE_WICKET_BONUS: 4,
  FOUR_WICKET_BONUS: 8,
  FIVE_WICKET_BONUS: 16,
  MAIDEN_OVER: 12,
};

const BATTING_POINTS = {
  RUN: 1,
  BOUNDARY_BONUS: 1,
  SIX_BONUS: 2,
  THIRTY_RUN_BONUS: 4,
  HALF_CENTURY_BONUS: 8,
  CENTURY_BONUS: 16,
  DUCK_DISMISSAL: -2,
};

const FIELDING_POINTS = {
  CATCH: 8,
  STUMPING: 12,
  RUN_OUT: 6,
  THREE_CATCH_BONUS: 4,
};

const MAIN_PLAYER_POINTS = {
  CAPTAIN: 2,
  VICE_CAPTAIN: 1.5,
};

module.exports = {
  WICKET_TYPES,
  FIELDING_TYPES,
  BOWLING_POINTS,
  BATTING_POINTS,
  FIELDING_POINTS,
  MAIN_PLAYER_POINTS,
};
