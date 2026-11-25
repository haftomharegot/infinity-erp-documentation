# Product Price Updates – Findings and Recommendations

## 1. Current System Functionality and Findings

The Product Price Updates workflow provides functionality for preparing, previewing, applying, and tracking bulk changes to product sales prices and costs. It consists of two related areas: **Product Price Updates** and **Product Price History**.

### 1.1. Product Price Updates

#### 1.1.1. Price Update List

The Product Price Updates list displays the available price update batches and provides an overview of their processing information.

The list includes the following information:

- **Name:** Identifies the price update batch.
- **Company:** Indicates the company associated with the update.
- **State:** Displays the current processing status of the batch.
- **Total Line Count:** Shows the total number of product lines included in the batch.
- **Applied Line Count:** Shows the number of product lines successfully applied.
- **Skipped Line Count:** Shows the number of product lines skipped during processing.
- **Failed Line Count:** Shows the number of product lines that failed during processing.
- **Created By:** Identifies the user who created the batch.
- **Applied By:** Identifies the user who applied the update.
- **Applied Date:** Displays when the update was applied.

The list provides the following filtering options:

- Draft
- Previewed
- Applied
- Has Failed Lines
- Add Custom Filter

Records can also be grouped by:

- State
- Company
- Applied Date

The Favorites option allows users to save the current search.

#### 1.1.2. Creating a Price Update

Users can create a new price update batch through the New action.

The creation form is organized into several sections:

**A. Update Scope**

This section defines which products and company are associated with the update.

It includes:

- **Company:** Specifies the company associated with the price update.
- **Products:** Defines the products to be included in the update.
- **Reason:** Records the reason for making the price changes.

**B. Update Summary**

This section provides a summary of the processing results:

- Total Line Count
- Applied Line Count
- Skipped Line Count
- Failed Line Count
- Applied By
- Applied At

When creating a new batch, the line counts initially display zero, while the application information remains empty until the update is applied.

**C. Sales Price**

This section defines how sales prices should be updated.

It includes:

- **Update Sales Price:** Enables sales price updates.
- **Sales Update Mode:** Defines the method used to calculate the new sales price.
- **Sales Update Value:** Specifies the value used by the selected update method.

The observed update methods include:

- Set Fixed Price
- Increase by Percentage
- Decrease by Percentage
- Increase by Percentage
- Decrease by Percentage

The form initially displays Increase by Percentage as the default sales update mode.

**D. Cost**

This section provides similar configuration for product costs.

It includes:

- **Update Cost:** Enables cost updates.
- **Cost Update Mode:** Defines the method used to calculate the new cost.
- **Cost Update Value:** Specifies the value used by the selected cost update method.

The new form initially displays Increase by Percentage as the default cost update mode.

**E. Rounding**

This section provides a Rounding Method field that determines how calculated prices are rounded.

The observed default option is No Rounding.

**F. Preview and History**

This section displays product-level lines associated with the price update batch.

The displayed information includes:

- Product
- Quantity
- Old Sales Price
- New Sales Price
- Sales Price Delta
- Old Cost
- New Cost
- Cost Delta
- Status

This section provides visibility into the calculated changes and their processing outcomes.

#### 1.1.3. Price Update Statuses and Actions

The workflow provides the following statuses:

- **Draft:** The price update batch has been created but has not yet been previewed.
- **Previewed:** The proposed product-level changes have been generated for review.
- **Applied:** The update has been processed and the resulting changes have been applied.
- **Cancelled:** The update batch has been cancelled.

The observed process includes the following actions:

**Save**

Saves the newly created price update batch.

**Preview**

Generates the proposed product-level price and cost changes without applying them.

After Preview is selected:

- The batch status changes from Draft to Previewed.
- Product-level lines are generated in the Preview and History section.
- The old and proposed new prices and costs are displayed.
- The summary counts are updated to reflect the generated lines.
- An Apply action becomes available.

The observed preview process does not apply the proposed changes. The Applied Line Count remains zero until the update is applied.

**Apply**

Processes the previewed price update batch.

After Apply is selected:

- The batch status changes from Previewed to Applied.
- The product-level line statuses change from Preview to Applied.
- The Applied Line Count is updated.
- The Applied By and Applied At fields are populated.
- The Preview, Apply, and Cancel action buttons are no longer displayed.

**Cancel**

Cancels the price update batch.

The observed cancellation process changes the batch status to Cancelled. However, the related product-level records are still retained in Product Price History.

#### 1.1.4. Activity Tracking

The activity log records important events during the price update process.

The observed activities include:

- Creation of the price update batch.
- Generation of the preview.
- Transition from Draft to Previewed.
- Application of the update.
- Transition from Previewed to Applied.

This provides additional visibility into the sequence of actions performed on a batch.

### 1.2. Product Price History

Product Price History provides product-level records associated with price update batches.

Unlike Product Price Updates, which manages the overall batch, Product Price History focuses on the individual product results.

#### 1.2.1. Price History List

The history list displays the recorded product-level price update information.

The observed columns include:

- **Batch:** Identifies the price update batch associated with the record.
- **Product:** Identifies the affected product.
- **Company:** Indicates the associated company.
- **Old Sales Price:** Displays the sales price before the update.
- **New Sales Price:** Displays the resulting sales price.
- **Sales Price Delta:** Shows the difference between the old and new sales prices.
- **Old Cost:** Displays the cost before the update.
- **New Cost:** Displays the resulting cost.
- **Cost Delta:** Shows the difference between the old and new costs.
- **Status:** Displays the outcome associated with the product-level record.
- **Applied By:** Identifies the user associated with the application.
- **Applied At:** Displays the application date and time.

#### 1.2.2. Product Price History Details

Opening a history record displays additional information about the individual product-level result.

The detail view includes:

**A. General Information**

- Batch
- Product
- Company
- Status
- Applied By
- Applied At

**B. Sales Price**

- Old Sales Price
- New Sales Price
- Sales Price Delta

**C. Cost**

- Old Cost
- New Cost
- Cost Delta

**D. Additional Information**

- Reason
- Error Message

The record connects the individual product result to its originating batch and provides the relevant price, cost, and processing information.

#### 1.2.3. Relationship Between Price Updates and Price History

Product Price Updates and Product Price History are closely related but serve different purposes.

- Product Price Updates manages the overall update batch and its processing lifecycle.
- Product Price History records the individual product-level outcomes associated with the batch.

When a batch is previewed, product-level preview lines are generated. When the batch is applied, the lines reflect the applied results.

The observed cancellation process also retains the associated product-level records in Product Price History.

This relationship allows users to move from an overall batch to the individual product records associated with it.

### 1.3. Findings

#### 1.3.1. The Workflow Supports a Controlled Bulk Price Update Process

The workflow separates preparation, preview, and application into distinct stages.

This allows users to review proposed price and cost changes before applying them, reducing the likelihood of applying unintended changes.

#### 1.3.2. Sales Price and Cost Updates Can Be Configured Separately

The form provides separate configuration sections for sales prices and costs.

This allows users to configure the two types of changes independently rather than requiring them to use the same update settings.

#### 1.3.3. Preview Provides Product-Level Visibility

The Preview action generates individual product lines showing the old and proposed new values, together with the corresponding differences.

This provides users with an opportunity to review the proposed results before applying the batch.

#### 1.3.4. Processing Results Are Summarized at Batch Level

The workflow provides total, applied, skipped, and failed line counts.

These counters help users understand the overall outcome of a batch without having to inspect every product-level record individually.

#### 1.3.5. Product-Level History Supports Traceability

Product Price History retains individual records linked to their originating batches.

The records include previous and new prices, cost differences, status, reason, and available application information. This provides a useful basis for reviewing historical price changes.

#### 1.3.6. Cancellation Status Is Not Consistently Reflected in Product Price History

When a price update batch is cancelled, its overall status correctly changes to Cancelled. However, the associated product-level records remain available in Product Price History with their Status displayed as No Change.

This creates an inconsistency between the batch status and the status of its associated history records.

The No Change status does not clearly communicate that the batch was cancelled. It may also be confused with a successfully processed update in which the resulting price or cost did not change.

## 2. Recommendations

### 2.1. Distinguish Cancelled Records in Product Price History

The status of product-level records associated with a cancelled batch should clearly reflect the cancellation.

**Recommendation:**

- Display Cancelled as the status of history records belonging to a cancelled batch.
- Ensure the batch status and associated product-level history statuses remain consistent.
- Preserve No Change for cases where an update was processed but resulted in no actual price or cost difference.

This will help users distinguish cancelled operations from successfully processed updates that did not produce a price or cost change.

### 2.2. Clarify the Meaning of Processing Statuses

The workflow uses several statuses at batch and product-line levels. Their meanings should be clear and consistent throughout the interface.

**Recommendation:**

- Provide clear status labels and, where necessary, brief descriptions.
- Ensure Preview, Applied, No Change, Skipped, Failed, and Cancelled represent distinct outcomes.
- Apply consistent status terminology in the update batch, product-level lines, and history list.

### 2.3. Improve Visibility of Skipped and Failed Product Lines

The batch summary provides separate counters for skipped and failed lines, but the conditions that lead to these outcomes should be understandable to users.

**Recommendation:**

- Provide a clear explanation for each skipped or failed product line.
- Populate the Error Message field with useful information when a line fails.
- Make it easy to identify and review skipped and failed lines from the batch details.

This will help users understand processing issues and determine whether further action is required.

### 2.4. Improve the Review Experience Before Application

The Preview action is an important control point in the workflow because it allows users to inspect proposed changes before applying them.

**Recommendation:**

- Keep the old and proposed new sales prices and costs clearly visible.
- Make differences between old and new values easy to identify.
- Clearly communicate that Preview does not apply changes.
- Provide a clear indication that the batch is ready for application after a successful preview.

### 2.5. Maintain Consistent Historical Information

Product Price History serves as a record of individual product-level outcomes and should provide reliable information for reviewing previous operations.

**Recommendation:**

- Ensure every product-level history record remains linked to its originating batch.
- Maintain accurate old and new price and cost values.
- Ensure the Reason, Status, and Error Message fields accurately reflect the outcome of the operation.
- Preserve historical records for cancelled batches while clearly identifying their cancelled status.

This will improve the reliability and usefulness of Product Price History as an audit and tracking facility.
