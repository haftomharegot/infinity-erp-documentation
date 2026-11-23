# Receipts – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Receipts List

The Receipts menu provides an interface for viewing, creating, and managing incoming inventory operations.

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

| Indicator      | Description displayed                         |
| -------------- | --------------------------------------------- |
| Total Receipts | Total receipts under the current filters.     |
| Ready          | Receipts awaiting validation.                 |
| Late           | Receipts past their scheduled date.           |
| Completed      | Completed receipts under the current filters. |

These indicators provide a quick overview of receipt volume and operational status.

### 1.2 List Columns

The receipt list displays information through columns including:

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

These columns provide visibility into receipt identification, source and destination locations, scheduling, product availability, related documents, and processing status.

### 1.3 Search, Filters, and Grouping

The list provides search and filtering options to help users locate and organize receipt records.

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

The system supports two ways of displaying receipt records:

- **List View:** Displays receipt records in a table with configurable columns.
- **Card View:** Displays receipt records as individual cards.

This allows users to choose a display style based on their working preferences.

## 2. Opening an Existing Receipt

Opening a receipt provides access to its main information, operational details, available actions, and activity history.

### 2.1 Transfer Details

The Transfer Details section contains information about the source or receiving party, operation type, and inventory location involved in the operation.

The receipt creation form uses the following fields:

- Receive From
- Operation Type
- Destination Location

These fields identify the source of the incoming products, the type of receipt operation, and the location where the products are to be received.

### 2.2 Schedule and Reference

The Schedule & Reference section provides:

- Scheduled Date
- Effective Date
- Source Document

The scheduled date represents the planned receiving date, while the effective date records the date associated with the completed operation.

The Source Document field provides a reference to the business document associated with the receipt.

### 2.3 Transfer Summary

The Transfer Summary section displays:

- Status
- Priority
- Source Document

This provides a quick view of the receipt's current operational state and priority.

### 2.4 Operations

The Operations tab displays the product lines associated with the receipt.

The observed information includes:

- Product
- Packaging
- Demand
- Quantity
- Unit

This section provides visibility into the products and quantities involved in the receiving operation.

### 2.5 Additional Information and Note

The receipt form also provides:

- Additional Info
- Note

These tabs provide separate areas for supplementary operational information and notes.

## 3. Receipt Actions

The reviewed receipt workflow provides actions and supporting views.

### 3.1 Moves

The Moves action opens a separate Detailed Operations view associated with the receipt.

This view provides additional information about the inventory movement lines.

### 3.2 Return

The Return action is available for return-related operations.

During testing, a return operation was initiated from an existing delivery. The system generated a return-related receipt record and linked it to the original delivery through its Source Document reference.

The generated record contained the returned product lines and quantities and was available for further review.

This demonstrates that the return process creates a traceable relationship between the original delivery and the resulting receipt operation.

### 3.3 Activity History

The receipt detail page provides an activity area where users can review recorded activities and status changes.

This supports visibility into the progress and history of the operation.

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

This view provides additional information about the product movement associated with the receipt, including its source location, destination package where applicable, quantity, and unit of measure.

The page also provides search, column configuration, and Import / Export controls.

## 5. Creating a New Receipt

Selecting New Receipt opens the Create Receipt form.

### 5.1 Transfer Details

The form contains:

| Field                | Purpose                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| Receive From         | Identifies the source or party from which products are being received. |
| Operation Type       | Identifies the type of receiving operation.                            |
| Destination Location | Identifies the inventory location where the products will be received. |

### 5.2 Schedule and Reference

The form provides:

- Scheduled Date
- Source Document
- Assign Owner

These fields provide scheduling information, a reference to the related business document, and an owner assignment where applicable.

### 5.3 Transfer Summary

The form displays:

- Status
- Priority
- Source Document

When creating a new receipt, the initial status is displayed as Draft and the priority as Normal.

### 5.4 Operations

The Operations tab provides the following columns:

- Product
- Packaging
- Demand
- Unit

The Add a line option allows users to add product lines to the receipt.

### 5.5 Additional Information and Note

The form provides two additional tabs:

- Additional Info
- Note

These sections provide areas for recording information beyond the main receipt and product details.

### 5.6 Available Actions and Stages

The creation form provides the following actions:

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

These stages provide a visual indication of the receipt's progress through the workflow.

## 6. Overall Findings

The reviewed Receipts workflow provides the following capabilities:

1. Users can view and manage receipts through List View and Card View.
2. Summary indicators provide an overview of receipt volume, readiness, lateness, and completion.
3. Search, filters, grouping, favorites, and configurable columns support record organization.
4. Receipt records provide information about the source, destination location, scheduling, references, priority, and product lines.
5. Users can create new receipts and add product lines through the Operations section.
6. The Moves action provides a separate view of detailed inventory movements.
7. The Return process can generate a receipt linked to the original delivery.
8. Activity history provides visibility into recorded activities and status changes.

Overall, the Receipts workflow provides the main functions needed to create, review, and monitor incoming inventory operations.

# Part II: Recommendations for Improvement

## 7. Improve Receipt List Visibility

The receipt list contains useful indicators and operational information.

Recommended improvements:

- Provide clear explanations for Total Receipts, Ready, Late, and Completed.
- Ensure summary indicators update consistently with the selected filters.
- Make important information such as receipt status, scheduled date, product availability, and deadline easy to identify.
- Provide clear visual indications for late receipts and receipts requiring attention.

## 8. Improve Receipt Readiness and Validation

The workflow should clearly communicate the conditions required for a receipt to move between its different stages.

Recommended improvements:

- Explain the meaning of Draft, Waiting, Ready, and Done.
- Clearly communicate why a receipt is not ready for validation.
- Provide appropriate checks for received quantities and required product information.
- Display clear validation messages when required information is missing or inventory conditions are not satisfied.
- Prevent invalid or duplicate completion of receipt operations.

## 9. Improve Receipt Information and Field Guidance

Provide short explanations for fields that may not be immediately clear to users, particularly:

- Receive From
- Operation Type
- Destination Location
- Scheduled Date
- Effective Date
- Source Document
- Assign Owner
- Product Availability
- Deadline
- Back Order Of
- Destination Package
- From Owner

This will help users understand the information required and reduce mistakes during receipt preparation.

## 10. Improve Return Traceability

The tested return process creates a receipt linked to the original delivery. This relationship should be easy for users to identify and follow.

Recommended improvements:

- Clearly identify the original delivery associated with a return receipt.
- Provide direct navigation between the original delivery and the resulting receipt.
- Display returned products and quantities clearly.
- Maintain a history of return operations.
- Provide appropriate controls to prevent incorrect or duplicate returns.

## 11. Improve Detailed Operations Visibility

The Detailed Operations page provides additional information about product movements.

Recommended improvements:

- Provide clear explanations for Pick From, Destination Package, and From Owner.
- Make the relationship between receipt lines and detailed movement lines easy to understand.
- Display relevant lot or serial information when product tracking requires it.
- Provide clear movement status and completion information.

## 12. Improve Receipt and Related Document Traceability

Receipts may originate from different business operations and related documents.

Recommended improvements:

- Make the originating document easy to identify and open.
- Clearly communicate the relationship between a receipt and its source document.
- Maintain traceability between related inventory operations.
- Provide clear feedback when a related business document cannot proceed to receipt.

## 13. Conclusion

The current Receipts workflow provides a structured interface for managing incoming inventory, including receipt creation, scheduling, product operations, detailed movement review, and return-related receiving.

The main opportunities for improvement are clearer receipt readiness information, stronger validation, better field guidance, improved return traceability, and clearer visibility into detailed inventory movements.
