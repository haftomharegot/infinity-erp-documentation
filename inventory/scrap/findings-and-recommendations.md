# Scrap – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Scrap Orders List

The Scrap menu provides a separate interface for creating and reviewing scrap orders.

The page provides:

- List View and Card View.
- Search and Filters.
- Group By.
- Favorites and Saved Searches.
- Columns configuration.
- Analyze.
- Import and Export.

### 1.1 List Columns

The observed list contains nine columns:

| Column          | Description                                    |
| --------------- | ---------------------------------------------- |
| Reference       | Scrap order reference.                         |
| Date            | Date of the scrap operation.                   |
| Product         | Product being scrapped.                        |
| Quantity        | Quantity being scrapped.                       |
| Unit of Measure | Unit used for the quantity.                    |
| Source Location | Location from which the product is removed.    |
| Scrap Location  | Destination location for the scrapped product. |
| Company         | Associated company.                            |
| Status          | Current state of the scrap order.              |

Users can configure the displayed columns and their order.

### 1.2 Search, Filters, and Grouping

The available filters include:

- Draft
- Done
- Add Custom Filter

The available grouping options include:

- Product
- Location
- Scrap Location
- Transfer
- Manufacturing Order

Additional searchable fields include product, company, owner, package, lot/serial number, source location, scrap location, scrap reason, status, and related document information.

## 2. Creating a Scrap Order

Selecting **New** opens the Scrap Orders form.

The observed fields include:

| Field                 | Current Functionality                                              |
| --------------------- | ------------------------------------------------------------------ |
| Product               | Selects the product to be scrapped.                                |
| Quantity              | Specifies the quantity to scrap.                                   |
| Unit of Measure       | Displays the unit associated with the quantity.                    |
| Replenish Quantities? | Optional checkbox; its exact effect requires further verification. |
| Scrap Reason          | Records the reason for scrapping.                                  |
| Package               | Associates a package where applicable.                             |
| Owner                 | Identifies the inventory owner.                                    |
| Source Location       | Identifies where the product is removed from.                      |
| Scrap Location        | Identifies the destination for scrapped inventory.                 |
| Source Document       | Provides a related document reference.                             |
| Company               | Identifies the associated company.                                 |

The available actions include:

- Save
- Cancel
- Validate

The form also displays Draft and Done stages.

## 3. Opening an Existing Scrap Order

The reviewed example was scrap order **SP/00001**.

Its recorded information included:

| Field           | Observed Value           |
| --------------- | ------------------------ |
| Reference       | SP/00001                 |
| Product         | [1234567890] Future-2030 |
| Quantity        | 1.00                     |
| Unit of Measure | Units                    |
| Package         | PACK0000001              |
| Owner           | HBH PLC                  |
| Source Location | Branch1                  |
| Scrap Location  | Virtual Locations/Scrap  |
| Scrap Reason    | Testing the scrap module |
| Company         | Head Office              |
| Status          | Done                     |

The record also displays the **Replenish Quantities?** option and a Source Document field.

The activity history records the creation of the scrap order and its transition from Draft to Done.

## 4. Product Moves

The existing scrap order provides a **Product Moves** action.

Selecting it opens a Moves History view associated with the scrap order.

The reviewed example displayed the following summary:

| Indicator      |      Value |
| -------------- | ---------: |
| Total Quantity | 1.00 Units |
| Moves          |          1 |
| Products       |          1 |
| Completed      |          1 |

The movement list includes:

- Date
- Reference
- Product
- Lot/Serial Number
- From
- To
- Quantity
- Unit
- Status
- Done By

The reviewed movement showed:

| Information | Observed Value           |
| ----------- | ------------------------ |
| Reference   | SP/00001                 |
| Product     | [1234567890] Future-2030 |
| From        | Branch1                  |
| To          | Virtual Locations/Scrap  |
| Quantity    | 1.00                     |
| Unit        | Units                    |
| Status      | Done                     |
| Done By     | Admin                    |

This confirms that the completed scrap order is associated with a recorded inventory movement from the source location to the scrap location.

The Moves History page also provides search, filters, grouping, and different movement views. Its filters include movement types such as Incoming, Outgoing, Internal, and Manufacturing, as well as To Do and Done.

## 5. Overall Findings

The reviewed Scrap workflow provides the main functionality expected from an inventory scrapping process:

1. Users can create scrap orders and specify products, quantities, reasons, and locations.
2. Scrap orders have Draft and Done stages, with a Validate action.
3. Completed records display their associated product and scrap information.
4. The Product Moves action provides visibility into the resulting inventory movement.
5. Movement history records the source, destination, quantity, status, and user responsible for completing the movement.

Overall, the workflow provides a clear way to record scrapped inventory and review its associated movement.

# Part II: Recommendations for Improvement

## 6. Strengthen Validation and Inventory Controls

Before validating a scrap order, the system should:

- Check that the entered quantity is valid and does not exceed the available quantity in the source location.
- Require a product, quantity, source location, scrap location, and scrap reason.
- Apply lot/serial selection and validation when product tracking requires it.
- Prevent invalid or duplicate processing of completed scrap orders.

These controls help reduce inventory errors and improve the reliability of scrap records.

## 7. Clarify Replenish Quantities

Provide a short explanation of the **Replenish Quantities?** option and clearly communicate what happens when it is enabled.

Users should understand whether it triggers a replenishment process, creates a request, or performs another action before selecting it.

## 8. Improve Scrap Reporting

Provide a dedicated scrap analysis or report showing:

- Scrapped quantities by product.
- Scrap quantities by reason.
- Scrap quantities by location.
- Scrap activity over time.
- Associated inventory values, where supported by the accounting configuration.

This would help management understand inventory losses and identify recurring problems.

## 9. Conclusion

The current Scrap workflow provides a functional process for recording scrapped products and reviewing their resulting inventory movements.

The most valuable improvements are stronger validation controls, better guidance for the replenishment option, and dedicated scrap reporting.
