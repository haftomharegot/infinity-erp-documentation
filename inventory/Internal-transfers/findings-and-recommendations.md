# Internal Transfers – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Internal Transfers List

The Internal Transfers page provides a centralized interface for viewing and managing transfer records. It includes summary indicators, search and filtering tools, record organization options, and different display views.

### 1.1 Summary Indicators

The page displays summary indicators for:

- **Total Transfers:** Number of transfer records displayed under the current filters.
- **Ready:** Transfers awaiting validation.
- **Late:** Transfers whose scheduled dates have passed.
- **Completed:** Transfers that have been completed.

These indicators provide a quick overview of transfer activity and outstanding operations.

### 1.2 Transfer List Information

The list provides information about transfer records, including:

- Reference
- Source Location (From)
- Destination Location (To)
- Contact
- Signed
- Responsible
- Scheduled Date
- Product Availability
- Deadline
- Effective Date
- Source Document
- Back Order
- Operation Type
- Company
- Status

The available information helps users identify transfers, understand their origin and destination, monitor their progress, and identify related business documents.

### 1.3 Search, Filters, Grouping, and Views

The list provides several tools for finding and organizing transfer records:

- **Search:** Search for transfer records.
- **Filters:** Filter records using available criteria, including transfer status and other operational conditions.
- **Group By:** Organize records using available grouping criteria.
- **Favorites:** Save frequently used searches or filter combinations.
- **List and Card Views:** Display records in different layouts.
- **Columns:** Customize the information displayed in the list.
- **Import / Export:** Import or export records using the available functionality.

## 2. Opening an Existing Transfer

Opening a transfer displays its detailed record, which is organized into several sections.

### 2.1 Transfer Details

This section displays the main information about the movement, including:

- Contact or delivery address
- Operation Type
- Source Location
- Destination Location, where applicable

These fields identify the parties or locations associated with the transfer and the type of inventory operation being performed.

### 2.2 Schedule and Reference

This section includes:

- Scheduled Date
- Effective Date
- Source Document

The scheduled date indicates when the transfer is planned, while the effective date records when the operation was completed or processed.

The Source Document field provides a reference to the business document associated with the transfer, where applicable.

### 2.3 Transfer Summary

The summary section displays:

- Status
- Priority
- Source Document

It provides a quick overview of the transfer's current state and priority.

### 2.4 Operations

The Operations tab displays the products and quantities associated with the transfer.

The available information includes product, packaging, demand, quantity, and unit of measure. The exact columns displayed may vary according to the operation and available layout.

### 2.5 Additional Information and Note

The transfer record also provides:

- **Additional Info:** An area for supplementary transfer information.
- **Note:** An area for recording relevant notes.

## 3. Transfer Actions and Status Management

The transfer detail provides operational actions for managing the movement.

The observed actions include:

- **Sign:** Provides signing options, including automatic assignment based on the displayed name, drawing a signature on the screen, or loading a signature from a local device.
- **Print:** Provides a printing option for the transfer.
- **Return:** Opens the return process for an eligible transfer.
- **Moves:** Opens a detailed operational view of the product movement.

The transfer also displays its workflow stages:

- Draft
- Waiting
- Ready
- Done

These stages indicate the transfer's progress through the workflow.

### 3.1 Signature Recording

When a transfer is signed, the signature is captured and retained in the record's activity log. The corresponding Signed field in the transfer list is also marked.

This provides a visible indication that a signature has been recorded.

## 4. Detailed Operations (Moves)

Clicking the Moves button opens a separate view containing the detailed product movement lines associated with the transfer.

The page includes an operational snapshot with indicators such as:

- Matching Records
- Visible Rows
- Selected
- Columns

The detailed operations list provides information including:

- Product
- Pick From
- Destination Package
- From Owner
- Quantity
- Unit of Measure

This view provides more detailed information about how products are being moved than the main transfer record.

## 5. Return Process

The Return action allows users to create a related transfer for returning products associated with an existing operation.

The return record displays the relevant transfer information, including:

- Receive From
- Operation Type
- Destination Location
- Scheduled Date
- Source Document
- Assign Owner
- Status
- Priority
- Operations
- Additional Info
- Note

The source document identifies the original transfer using a return reference.

### 5.1 Return Actions and Statuses

The return detail provides the following actions:

- Validate
- Print
- Return
- Cancel

The displayed return stages are:

- Draft
- Ready
- Done

Unlike the original transfer detail, the return record does not display the Waiting stage. The available actions and stages therefore differ between the original transfer and its return record.

## 6. Allocations and Reception Report

The return-related interface also provides an Allocations action.

Clicking Allocations opens a Reception Report containing information about the associated reception and its products.

The report displays:

- Related transfer reference
- Reception reference
- Associated contact
- Expected delivery date
- Product descriptions
- Product quantities
- Units of measure

The report also provides **Print** and **Print Labels** actions.

This gives users a separate view for reviewing and printing reception-related product information.

## 7. Creating a New Internal Transfer

Clicking New Transfer opens the Create Internal Transfer form.

The observed form contains the following fields:

### 7.1 Transfer Details

- Contact
- Operation Type
- Source Location
- Destination Location

These fields identify the parties and locations associated with the movement.

### 7.2 Schedule and Reference

- Scheduled Date
- Source Document

These fields allow users to specify when the transfer is planned and associate it with a relevant source document.

### 7.3 Transfer Summary

The form displays:

- Status, initially Draft
- Priority, initially Normal
- Source Document

### 7.4 Operations and Other Information

The transfer creation workflow also provides an Operations section for entering the products and quantities involved, together with Additional Info and Note sections.

The form follows the general structure used by the other inventory transfer workflows.

## 8. Overall Findings About the Current System

The current system provides a broad set of capabilities for managing inventory transfers. Users can view and organize transfer records, review transfer details, manage operational stages, inspect detailed product movements, create returns, and access reception-related reports.

However, the following findings require attention:

1. **List scope and operation types:** The supplied list contains records associated with different operation types, including deliveries, receipts, and internal transfers. The relationship between the page's Internal Transfers label and the records displayed needs clarification. Currently all the "delivery", "receipt", and "internal transfer" have identical data.

2. **Transfer information is distributed across several views:** Users need to open the transfer detail, Moves view, return record, or Reception Report to access different parts of the operational information.

3. **Return and original transfer interfaces differ:** Their available actions and workflow stages are not identical. The system does not make the differences and relationship between the two processes sufficiently clear.

4. **Allocation information is not immediately obvious:** The purpose of the Allocations action and its relationship with the Reception Report may not be clear to users who are unfamiliar with the workflow.

5. **Field guidance is limited:** Some fields, including Operation Type, Source Document, Priority, and the location fields, would benefit from clearer descriptions.

6. **The workflow contains several actions and stages:** Users need a clear understanding of when to use each action and how a transfer progresses from creation to completion.

# Part II: Recommendations for Improvement

## 9. Clarify the Scope of the Internal Transfers List

The Internal Transfers page should clearly display records belonging to the intended internal transfer workflow.

If the page is designed to display multiple inventory operation types, the interface should explain this clearly and provide effective filtering by operation type.

If it is intended to display only internal transfers, unrelated operation types should not appear in the list.

This will help users understand what they are managing and avoid confusion between deliveries, receipts, quality control, storage, and internal transfers.

## 10. Improve Transfer Detail Organization

The transfer detail should present the most important information in a clear and consistent structure.

Recommended improvements include:

- Clearly distinguish source and destination locations.
- Make the products and quantities being transferred easy to review.
- Display related source documents in a consistent and accessible way.
- Make the current transfer status and next available action clear.
- Provide direct access to related operational information without requiring users to navigate through several separate views unnecessarily.

## 11. Clarify the Return Process

The return process should clearly communicate its relationship with the original transfer.

Recommended improvements include:

- Display a clear reference and link to the original transfer.
- Explain the purpose of the return record.
- Clearly distinguish the actions available on the original transfer and the return record.
- Explain the differences between their workflow stages.
- Make the products and quantities being returned easy to review before validation.

These improvements would help users understand how returns are created and processed without confusing them with ordinary receipts or new transfers.

## 12. Improve the Allocations and Reception Report Interface

The purpose of the Allocations action should be made clearer.

Recommended improvements include:

- Use a descriptive action label or provide a short explanation of its purpose.
- Clearly identify the original transfer and related reception in the report.
- Make the relationship between the allocation information and the Reception Report visible.
- Provide clear access to printing and label-printing actions.

This would make the feature easier to discover and understand.

## 13. Improve Field Guidance and Terminology

Important fields should include short descriptions or helpful guidance.

Particular attention should be given to:

- Operation Type
- Source Location
- Destination Location
- Contact
- Source Document
- Scheduled Date
- Effective Date
- Priority
- Assign Owner

The system should also use consistent terminology across the original transfer, return record, Moves view, and Reception Report.

## 14. Improve Workflow Guidance and Validation

The system should provide clear guidance about the actions available at each transfer stage.

Recommended improvements include:

- Explain the purpose of Draft, Waiting, Ready, and Done.
- Clearly indicate the next appropriate action for each status.
- Provide confirmation before important operations are completed.
- Display clear messages when required information is missing or a transfer cannot be validated.
- Make the consequences of returning, validating, or cancelling a transfer understandable before the action is completed.

## 15. Conclusion

The current Internal Transfers workflow provides several useful inventory management capabilities, including transfer creation, status management, product movement details, returns, allocations, and reception reporting.

The main improvement areas are clarifying the scope of the transfer list, simplifying navigation between related information, explaining the return and allocation processes, and improving field and workflow guidance.

Addressing these areas would make the workflow easier to understand and use while preserving its existing operational capabilities.
