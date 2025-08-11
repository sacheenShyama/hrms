import axios from "axios";
import { setEmployee, setError, setLoading } from "../features/employeeSlice";

export const getEmployee = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const resp = await axios.get(
      `https://68950ae0be3700414e153752.mockapi.io/Employee`
    );
    dispatch(setEmployee(resp.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
