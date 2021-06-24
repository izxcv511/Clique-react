import axios from "axios";

import {
  CONFIG_AXIOS_BaseURL,
  PAGESIZE,
  STATUS,
  CONFIG_ACCESS_TOKEN,
} from "../const/index";

const axiosInstance = axios.create({
  baseURL: CONFIG_AXIOS_BaseURL,
  headers: {
    accept: "application/json",
  },
});

export async function login({ username = "", password = "" }) {
  const data = {
    username,
    password,
  };
  try {
    const result = await axiosInstance.post("/app/login", data);
    if (result.data.responseData) {
      localStorage.setItem(
        CONFIG_ACCESS_TOKEN,
        result.data.responseData.access_token
      );
      return {
        ok: true,
        data: result.data.responseData,
      };
    } else {
      return {
        ok: false,
        error: result.data.error.message,
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export async function getListPost({
  status = STATUS,
  pageSize = PAGESIZE,
  pageIndex = 0,
}) {
  const access_token = localStorage.getItem(CONFIG_ACCESS_TOKEN);
  if (access_token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        status,
        pageSize,
        pageIndex,
      },
    };
    try {
      const result = await axiosInstance.get("/fan/home", config);
      if (result.data.responseData) {
        return {
          ok: true,
          data: result.data.responseData,
        };
      } else {
        return {
          ok: false,
          error: result.data.error.message,
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  } else {
    return {
      ok: false,
      error: "Authentication",
    };
  }
}

export async function reactionLove({ id = "" }) {
  const access_token = localStorage.getItem(CONFIG_ACCESS_TOKEN);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const result = await axiosInstance.put(
      `/news/reaction/love/${id}`,
      {},
      config
    );
    if (result.data.responseData) {
      return {
        ok: true,
        data: result.data.responseData,
      };
    } else {
      return {
        ok: false,
        error: result.data.error.message,
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}
export async function unReactionLove({ id = "" }) {
  const access_token = localStorage.getItem(CONFIG_ACCESS_TOKEN);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const result = await axiosInstance.put(
      `/news/unreaction/love/${id}`,
      {},
      config
    );
    if (result.data.responseData) {
      return {
        ok: true,
        data: result.data.responseData,
      };
    } else {
      return {
        ok: false,
        error: result.data.error.message,
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export async function getUser() {
  const access_token = localStorage.getItem(CONFIG_ACCESS_TOKEN);
  if (access_token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    };
    try {
      const result = await axiosInstance.get("user", config);
      if (result.data.responseData) {
        return {
          ok: true,
          data: result.data.responseData,
        };
      } else {
        return {
          ok: false,
          error: result.data.error.message,
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  } else {
    return {
      ok: false,
      error: "Authentication",
    };
  }
}
