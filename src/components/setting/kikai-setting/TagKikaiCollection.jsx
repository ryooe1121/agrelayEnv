/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Kikai, SagyoKiroku } from "../../../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { TagKikai } from "../../../ui-components";
import { Collection } from "@aws-amplify/ui-react";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
export default function TagKikaiCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const sagyoKirokuItems = useDataStoreBinding({
    type: "collection",
    model: SagyoKiroku,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Kikai,
  }).items.map((item) => ({
    ...item,
    SagyoKirokus: sagyoKirokuItems.filter((model) => model.kikai === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <div>
      <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            </Table>
            <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="名前で検索"
      itemsPerPage={10}
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TagKikaiCollection")}
    >
      {(item, index) => (
        <TagKikai
          kikai={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TagKikai>
      )}
    </Collection>
    </div>
  );
}
