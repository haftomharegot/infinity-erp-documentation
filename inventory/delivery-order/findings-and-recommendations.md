# Delivery Orders – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Delivery Orders List

The Delivery Orders menu provides an interface for viewing, creating, and managing outgoing inventory operations.

The page provides:

- List View and Card View.
- Search.
- Filters.
- Group By.
- Favorites and Saved Searches.
- Columns configuration.
- Import and Export.

### 1.1 Summary Indicators

The list page displays four summary indicators:

| Indicator        | Description displayed                           |
| ---------------- | ----------------------------------------------- |
| Total Deliveries | Total deliveries under the current filters.     |
| Ready            | Deliveries awaiting validation.                 |
| Late             | Deliveries past their scheduled date.           |
| Completed        | Completed deliveries under the current filters. |

These indicators provide a quick overview of delivery activity and operational status.

### 1.2 List Columns

The delivery order list contains the following columns:

- Reference
- From
- To
- Contact
- Signed
- Responsible
- Scheduled Date
- Product Availability
- Deadline
- Effective Date
- Source Document
- Back Order Of
- Operation Type
- Company
- Status

The columns provide visibility into delivery identification, destination, scheduling, product availability, related documents, and current status.

### 1.3 Search, Filters, and Grouping

The list provides search and filtering options to help users locate and organize delivery orders.

The observed filters include:

- To Do
- My Transfers
- Starred
- Draft
- Waiting
- Ready
- Receipts
- Deliveries
- Internal
- Late
- Planning Issues
- Late Availability
- Backorders
- Warnings
- Add Custom Filter

The available grouping options include:

- Status
- Scheduled Date
- Source Document
- Operation Type
- Add Custom Group

Users can also save searches through Favorites.

### 1.4 List and Card Views

The system supports two ways of displaying delivery orders:

- **List View:** Displays delivery records in a table with configurable columns.
- **Card View:** Displays delivery records as individual cards.

This allows users to choose a display style based on their working preferences.

## 2. Opening an Existing Delivery Order

Opening a delivery order provides access to its main information, operational details, actions, and activity history.

### 2.1 Transfer Details

The Transfer Details section displays:

- Delivery Address
- Operation Type
- Source Location

These fields provide information about the destination and the type and origin of the delivery operation.

### 2.2 Schedule and Reference

The Schedule & Reference section displays:

- Scheduled Date
- Effective Date
- Source Document

The scheduled date represents the planned delivery date, while the effective date records the date associated with the completed operation.

The Source Document field provides a reference to the business document associated with the delivery.

### 2.3 Transfer Summary

The Transfer Summary section displays:

- Status
- Priority
- Source Document

This provides a quick view of the delivery's current operational state and priority.

### 2.4 Operations

The Operations tab displays the product lines associated with the delivery.

The observed columns include:

- Product
- Packaging
- Demand
- Quantity
- Unit

This section provides visibility into the products and quantities involved in the delivery.

### 2.5 Additional Information and Note

The delivery form also provides:

- Additional Info
- Note

These tabs provide separate areas for additional operational information and notes.

## 3. Delivery Order Actions

The reviewed delivery record provides several actions.

### 3.1 Sign

The Sign action supports three signing methods:

| Method | Function                                                     |
| ------ | ------------------------------------------------------------ |
| Auto   | Automatically assigns a signature using the displayed name.  |
| Draw   | Allows the user to draw a signature on the screen.           |
| Load   | Allows the user to upload a signature from the local device. |

After signing, the signature is captured and retained in the delivery record's detail log. The Signed field on the delivery orders list is also marked.

This provides a way to record delivery-related signature confirmation.

### 3.2 Print

The Print action provides access to printing the delivery order documentation.

### 3.3 Return

The Return action is available on the delivery record for initiating a return-related operation.

### 3.4 Moves

The Moves action opens a separate Detailed Operations view associated with the delivery order.

This provides a more detailed view of the inventory movement lines.

## 4. Detailed Operations

Selecting Moves opens the Detailed Operations page.

The page provides an operational snapshot containing:

- Matching Records
- Visible Rows
- Selected
- Columns

The movement list displays the following columns:

- Product
- Pick From
- Destination Package
- From Owner
- Quantity
- Unit of Measure

This view provides additional information about the product movement associated with the delivery order, including its source location, destination package where applicable, quantity, and unit of measure.

The page also provides search, column configuration, and Import / Export controls.

## 5. Creating a New Delivery Order

Selecting New Delivery opens the Create Delivery Order form.

### 5.1 Transfer Details

The form contains:

| Field            | Purpose                                                    |
| ---------------- | ---------------------------------------------------------- |
| Delivery Address | Identifies the delivery destination or address.            |
| Operation Type   | Identifies the type of delivery operation.                 |
| Source Location  | Identifies the location from which products are delivered. |

### 5.2 Schedule and Reference

The form contains:

- Scheduled Date
- Source Document

These fields provide scheduling information and a reference to the related business document.

### 5.3 Transfer Summary

The form displays:

- Status
- Priority
- Source Document

The initial status displayed when creating a new record is Draft, and the priority is displayed as Normal.

### 5.4 Operations

The Operations tab provides the following columns:

- Product
- Packaging
- Demand
- Unit

The Add a line option allows users to add product lines to the delivery order.

### 5.5 Additional Information and Note

The form provides two additional tabs:

- Additional Info
- Note

These sections provide areas for recording information beyond the main delivery and product details.

### 5.6 Available Actions and Stages

The observed form provides the following actions:

- Mark as Todo
- Validate
- Return
- Cancel
- Discard
- Save Transfer

The displayed stages are:

- Draft
- Waiting
- Ready
- Done

These stages provide a visual indication of the delivery order's progress through the workflow.

## 6. Relationship with the Billing Module

During the workflow review, it was observed that work orders created in the Billing module are also available in the Delivery Orders workflow.

This includes work orders associated with processes such as customer onboarding and work order estimations.

The Source Document field provides a reference to the originating business document.

This demonstrates a connection between Billing operations and Inventory delivery management.

The exact conditions under which a Billing customer onboarding and work order becomes available as a delivery order should be confirmed as part of the integration.

## 7. Overall Findings

The reviewed Delivery Orders workflow provides several important capabilities:

1. Users can view and manage delivery orders through List View and Card View.
2. Summary indicators provide an overview of delivery volume, readiness, lateness, and completion.
3. Search, filters, grouping, favorites, and configurable columns support record organization.
4. Delivery records contain destination, source location, scheduling, reference, priority, and product information.
5. Product lines can be managed through the Operations section.
6. The Sign action supports automatic, drawn, and uploaded signatures. Captured signatures are retained in the detail log, and the Signed field is marked in the list.
7. The Print action provides access to delivery documentation.
8. The Moves action provides a separate view of detailed inventory movements.
9. The Return action is available from the delivery record.
10. The workflow is connected to Billing work orders, providing a link between originating business operations and inventory delivery management.

Overall, the workflow provides a broad set of functions for managing outgoing inventory and monitoring delivery operations.

# Part II: Recommendations for Improvement

## 8. Improve Delivery List Visibility

The delivery list contains several useful indicators and operational columns. However, the information should be presented clearly to help users identify deliveries that require attention.

Recommended improvements:

- Provide clear explanations for Total Deliveries, Ready, Late, and Completed.
- Ensure that summary indicators update consistently with the selected filters.
- Make important information such as delivery status, product availability, deadline, and signature confirmation easy to identify.
- Provide clear visual indications for late deliveries and delivery readiness.

## 9. Improve Delivery Readiness and Validation

The workflow should provide clear information about the conditions required for a delivery to become Ready or Done.

Recommended improvements:

- Explain the meaning of Draft, Waiting, Ready, and Done.
- Clearly communicate why a delivery is not ready for validation.
- Provide appropriate checks for product availability and requested quantities.
- Display clear validation messages when required information is missing or inventory conditions are not satisfied.
- Prevent invalid or duplicate completion of delivery operations.

## 10. Clarify the Return Process

The Return action is available on the delivery record, but the complete process and its relationship with the original delivery should be clear to users.

Recommended improvements:

- Clearly explain what happens when Return is selected.
- Maintain a visible relationship between the original delivery and its return operation.
- Display returned products and quantities clearly.
- Provide appropriate controls to prevent incorrect or duplicate returns.

## 11. Improve Detailed Operations Visibility

The Detailed Operations page provides additional information about product movements.

Recommended improvements:

- Provide clear explanations for Pick From, Destination Package, and From Owner.
- Make the relationship between delivery order lines and detailed movement lines easy to understand.
- Display relevant lot or serial information when product tracking requires it.
- Provide clear movement status and completion information.

## 12. Improve Billing and Inventory Integration

The connection between Billing work orders and Delivery Orders is important for coordinating business and inventory operations.

Recommended improvements:

- Make the originating document easy to identify and open.
- Clearly communicate the relationship between the Billing work order and its delivery order.
- Prevent duplicate or inconsistent delivery records.
- Provide clear feedback when a related work order cannot proceed to delivery.
- Maintain traceability between originating business documents and resulting inventory operations.

## 13. Improve Field Guidance and Documentation

Provide short explanations for fields that may not be immediately clear to users, particularly:

- Delivery Address
- Operation Type
- Source Location
- Product Availability
- Deadline
- Effective Date
- Back Order Of
- Destination Package
- From Owner

This will help users understand the information required and reduce mistakes during delivery preparation.

## 14. Conclusion

The current Delivery Orders workflow provides a comprehensive set of functions for managing outgoing inventory, including delivery preparation, scheduling, product operations, signature confirmation, printing, returns, and detailed movement review.

The main opportunities for improvement are clearer delivery readiness information, stronger validation, improved return handling, better visibility into detailed movements, and clearer integration with Billing operations.
