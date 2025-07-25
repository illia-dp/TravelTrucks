import { useFormikContext } from "formik";
import { useEffect } from "react";
import { selectSearchParams } from "../../redux/campers/selectors";
import { useAppSelector } from "../../redux/hooks";

const SyncSearchParams = () => {
  const { setFieldValue } = useFormikContext();
  const searchParams = useAppSelector(selectSearchParams);

  useEffect(() => {
    if (searchParams.location !== "") {
      setFieldValue("location", searchParams.location);
    } else {
      setFieldValue("location", "");
    }

    if (searchParams.equipment.length > 0) {
      setFieldValue("equipment", searchParams.equipment);
    } else {
      setFieldValue("equipment", []);
    }

    if (searchParams.form !== "") {
      setFieldValue("form", searchParams.form);
    } else {
      setFieldValue("form", "");
    }

    if (searchParams.transmission !== "") {
      setFieldValue("transmission", searchParams.transmission);
    } else {
      setFieldValue("transmission", "");
    }

    if (searchParams.engine !== "") {
      setFieldValue("engine", searchParams.engine);
    } else {
      setFieldValue("engine", "");
    }
  }, [searchParams, setFieldValue]);

  return null;
};

export default SyncSearchParams;
