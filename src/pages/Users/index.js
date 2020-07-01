import React, { useState, useEffect } from "react";

import Table from "../../components/Table";
import { toastError, toastSuccess } from "../../services/toast";

import ModelForm from "./components/Form";
import Drawer from "../../components/Drawer";

import api from "../../services/api";

import { MODEL, ROW_NAME, COLUMNS } from "./components/Constants";

export default () => {
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(null);

  const [updateRow, setUpdateRow] = useState({
    open: false,
    row: {},
  });

  const [createRow, setCreateRow] = useState({
    open: false,
  });

  const onCloseUpdate = () => setUpdateRow({ open: false });
  const onCloseCreate = () => setCreateRow({ open: false });

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get(`private/${MODEL}`);

        setRows(response.data.users);
      } catch (e) {
        toastError("Tente novamente em breve!.");
      }
    };

    fetch();
  }, [refresh, toastError]);

  const onDelete = async ({ id }) => {
    try {
      await api.delete(`private/${MODEL}/${id}`);

      toastSuccess(`${ROW_NAME} deletado com sucesso.`);
      setRefresh(refresh + 1);
    } catch (e) {
      toastError("Tente novamente em breve!.");
    }
  };

  const onCreate = async (data) => {
    try {
      if (loading) return;

      setLoading(true);
      await api.post(`private/${MODEL}`, data);

      toastSuccess(`${ROW_NAME} criado com sucesso.`);
      setRefresh(refresh + 1);
      setCreateRow({ open: false });
      setLoading(false);
    } catch (e) {
      toastError("Tente novamente em breve!.");
      setLoading(false);
    }
  };

  const onUpdate = async (data) => {
    try {
      if (loading) return;

      setLoading(true);
      await api.put(`private/${MODEL}/${updateRow.row.id}`, data);

      toastSuccess(`${ROW_NAME} atualizado com sucesso.`);
      setUpdateRow({ open: false });
      setRefresh(refresh + 1);
      setLoading(false);
    } catch (e) {
      toastError("Tente novamente em breve!.");
      setLoading(false);
    }
  };

  return (
    <>
      <Table
        {...{
          columns: COLUMNS,
          rows,
          model: MODEL,
          rowName: ROW_NAME,
          onDelete,
          updateRow,
          setUpdateRow,
          createRow,
          setCreateRow,
          loading,
        }}
      />

      <Drawer
        {...{
          loading,
          open: updateRow.open,
          onClose: onCloseUpdate,
          title: `Edit ${ROW_NAME}`,
          rowName: ROW_NAME,
        }}
      >
        <ModelForm
          {...{
            loading,
            defaultValues: updateRow.row,
            confirmTitle: "Edit",
            onClose: onCloseUpdate,
            onSubmit: onUpdate,
          }}
        />
      </Drawer>

      <Drawer
        {...{
          loading,
          open: createRow.open,
          onClose: onCloseCreate,
          title: `Create ${ROW_NAME}`,
          rowName: ROW_NAME,
        }}
      >
        <ModelForm
          {...{
            loading,
            confirmTitle: "Create",
            onClose: onCloseCreate,
            onSubmit: onCreate,
          }}
        />
      </Drawer>
    </>
  );
};
