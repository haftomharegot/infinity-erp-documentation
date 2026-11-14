# Lots and Serial Numbers – Findings and Recommendations

## 1. Overview

This document presents observations about the existing Lots and Serial Numbers functionality and recommends improvements to strengthen product identification, inventory traceability, and stock management.

## 2. Current System Findings

The existing Lots / Serial Numbers functionality provides a dedicated area for managing lot and serial number records.

### 2.1. Lot / Serial Number List View

The list view displays records with the following columns:

| Field              | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Internal Reference | Additional reference used to identify the record.                                                         |
| Lot/Serial Number  | Identification number assigned to a lot or individual item.                                               |
| Product            | Product associated with the lot or serial number.                                                         |
| Created On         | Date and time the record was created.                                                                     |
| Company            | Company associated with the record.                                                                       |
| Transfer to        | Transfer-related information displayed for the record. The exact meaning and behavior should be verified. |
| Activities         | Activity information associated with the record.                                                          |
| On Hand Quantity   | Current quantity associated with the lot or serial number.                                                |

**Additional Notes:**

- The list includes a **Columns** control for managing the displayed columns.
- The operational snapshot reports the number of columns in the current layout. The observed screenshot displays 9.
- The list provides a search field for locating records.
- Pagination controls display the current record range and allow navigation between pages.
- The interface provides list and an additional view-selection control.
- An **Import / Export** option is available for working with lot/serial number data.
- Each record also has a row-level action menu.

### 2.2. Filters and Grouping

The list view provides filtering, grouping, and saved-search functionality.

**Available Filters:**

| Filter        | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| At Customer   | Filters records associated with customer-related status or location. |
| On Hand       | Filters records based on on-hand stock availability.                 |
| Creation Date | Filters records according to their creation date.                    |

The Creation Date filter also provides date-based options, including:

- Months: November, October, September.
- Quarters: Q4, Q3, Q2, Q1.
- Years: 2026, 2025, 2024.

The available date options may change as time progresses or as records are added.

**Available Group By Options:**

| Grouping      | Available Options                                     |
| ------------- | ----------------------------------------------------- |
| Product       | Groups records by product.                            |
| Location      | Groups records by inventory location.                 |
| Creation Date | Groups records by Year, Quarter, Month, Week, or Day. |
| Company       | Groups records by company.                            |

**Favorites and Saved Searches:**

The system also provides:

- **Save Current Search:** Allows users to save their current search, filter, or grouping configuration.
- **Lots / Serial Numbers:** A saved-search entry is displayed under Favorites.
- **Default Filter:** Identifies the default filter associated with the saved search.
- **Shared:** Indicates that the saved search is shared.

These options help users reuse search configurations and organize their record views.

### 2.3. Lot / Serial Number Form

The form provides information associated with an individual lot or serial number record.

The observed information includes:

| Field              | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| Lot/Serial Number  | Unique identification assigned to the record.                  |
| Product            | Product associated with the record.                            |
| On Hand Quantity   | Quantity currently associated with the lot or serial number.   |
| Units              | Unit of measure associated with the quantity, where displayed. |
| Internal Reference | Additional identification reference.                           |
| Company            | Company associated with the record.                            |
| Total Value        | Total inventory value associated with the record.              |
| Average Cost       | Average cost information displayed for the record.             |
| Cost               | Cost information displayed on the form.                        |
| Description        | Additional information about the record.                       |

**View Detail:** Opening an existing record displays information similar to the form used when creating a new record.

### 2.4. Location and Traceability Actions

The record provides Location and Traceability actions.

These actions appear intended to help users access information related to the location and movement history of a lot or serial number.

### 2.5. Activity History

The record displays activity information, including:

- Record creation date.
- User associated with the activity.
- Activity description, such as lot/serial creation.

This provides basic information about when a record was created and who performed the action.

### 2.6. Product Tracking Configuration

The product form includes a **Tracking By** field under Inventory and Logistics.

This indicates that product tracking configuration is associated with inventory management.

The available tracking options and their exact effects should be clear to determine how products are configured for quantity-based, lot-based, or individual serial number tracking.

## 3. Findings and Potential Improvement Areas

### 3.1. Clear Tracking Type Identification

**Finding:**

The lot/serial record form displays a Lot/Serial Number field, but the tracking method should be clearly identifiable to users.

**Recommendation:**

Display the tracking type clearly, distinguishing between:

- Lot Number.
- Serial Number.

The selected tracking type should be consistent with the tracking configuration of the associated product.

### 3.2. Additional Batch Information

**Finding:**

The observed form contains basic identification and inventory information. Additional batch-related information may be useful for organizations that require detailed product traceability.

**Recommendation:**

Consider adding an optional **Batch Information** section containing:

| Suggested Field           | Purpose                                                 |
| ------------------------- | ------------------------------------------------------- |
| Manufacturing Date        | Identifies when the batch was manufactured.             |
| Expiration Date           | Identifies when the batch expires.                      |
| Supplier Reference        | Identifies the supplier associated with the batch.      |
| Receipt Reference         | Links the batch to its original receipt transaction.    |
| Initial Received Quantity | Records the quantity originally received for the batch. |

These fields should be available when relevant to the product and business requirements.

### 3.3. Improved Serial Number Identification

**Finding:**

Serial number tracking requires each individually tracked item to be distinguishable from every other item.

**Recommendation:**

Strengthen serial number management through:

- Unique serial number validation.
- Clear association between the serial number and its product.
- Access to the current location of the item.
- Access to the item's movement history.
- Prevention of duplicate serial number assignments within the appropriate identification scope.

For individually tracked products, the system should support accurate identification of each item throughout its lifecycle.

### 3.4. Expiration Date Management

**Finding:**

Expiration information is important for products such as chemicals, food, and pharmaceutical materials. Its availability and management through the current lot/serial functionality need to be verified.

**Recommendation:**

Consider introducing expiration management for applicable lot-tracked products.

Suggested information:

- Manufacturing Date.
- Expiration Date.
- Expiry Status:
  - Valid.
  - Near Expiry.
  - Expired.

Possible improvements include:

- Displaying expiration dates in the lot list.
- Filtering lots by expiration date.
- Warning users when selecting expired or near-expiry products.
- Supporting appropriate stock handling restrictions for expired products.

Expiration dates should normally be associated with the relevant batch or lot rather than being independently entered for every unit in that batch.

### 3.5. Improved Traceability

**Finding:**

A Traceability action is available on the record. However, the exact information it displays and the transactions included are not much clear.

**Recommendation:**

Ensure that traceability information provides a clear history of relevant inventory transactions, such as:

- Initial receipt or production.
- Supplier or manufacturing source, where applicable.
- Storage location.
- Internal transfers.
- Product issues and deliveries.
- Returns.
- Inventory adjustments.
- Current on-hand quantity.

For serial-tracked products, the history should identify the movements of each individual item. For lot-tracked products, it should provide the history of the relevant batch.

The existing Traceability action should be evaluated before developing a separate history feature to avoid duplication.

### 3.6. Stock Status and Availability

**Finding:**

The observed record contains on-hand quantity and cost information. The list also provides an On Hand filter. Additional stock-status information may improve visibility into the condition and usability of tracked products.

**Recommendation:**

Consider providing appropriate stock-status visibility, such as:

- Available.
- Reserved.
- Damaged.
- Quarantined.
- Expired.
- Disposed.

The system should distinguish between physical stock quantity and the quantity available for normal operations.

Status changes should follow appropriate inventory operations and authorization rules.

### 3.7. Search, Filtering, and Grouping Improvements

**Finding:**

The current list view already provides several useful search and organization features, including:

- Search field.
- At Customer filter.
- On Hand filter.
- Creation Date filter with month, quarter, and year options.
- Grouping by Product, Location, Creation Date, and Company.
- Date grouping by Year, Quarter, Month, Week, and Day.
- Save Current Search and Favorites functionality.

These features provide users with several ways to find and organize lot/serial records.

**Recommendation:**

Rather than duplicating existing filtering and grouping options, consider extending the available search criteria with additional filters where the underlying information is available.

Potential additional filters include:

- Tracking Type.
- Internal Reference.
- Expiration Date.
- Expiry Status.
- Stock Status.
- Supplier.
- Receipt Reference.

The existing filters and grouping options should also be reviewed to ensure that their labels and behavior are clear to users.

### 3.8. List View and Column Management

**Finding:**

The list view provides a Columns control and displays a column count in the operational snapshot. It also provides Import / Export functionality.

**Recommendation:**

Consider the following additions based on the added columns in order to include them:

- Ensure that users can easily select and organize relevant columns.
- Provide useful default column configurations for different tracking needs.
- Consider additional columns for Expiration Date, Tracking Type, Stock Status, and Current Location where the information is available.
- Ensure that exported data includes the relevant fields selected or requested by users.
- Provide clear validation feedback when importing lot/serial records.

### 3.9. Data Validation and Control

**Finding:**

Accurate lot and serial number records are essential for reliable inventory traceability.

**Recommendation:**

Consider implementing or reviewing the following validations:

- Prevent duplicate lot or serial number records within the appropriate scope.
- Ensure that the tracking method is compatible with the associated product configuration.
- Validate serial number assignment for individually tracked products.
- Validate expiration dates where applicable.
- Warn users when selecting expired or restricted stock.
- Restrict unauthorized changes to identification information after inventory transactions have occurred.
- Maintain a history of important changes to existing records.

## 4. Recommended Form Organization

For improved usability and information management, the form could be organized into the following sections:

### 4.1. Identification

- Lot/Serial Number.
- Tracking Type.
- Product.
- Internal Reference.

### 4.2. Batch Information

- Manufacturing Date.
- Expiration Date.
- Supplier Reference.
- Receipt Reference.
- Initial Received Quantity.

### 4.3. Inventory Information

- On Hand Quantity.
- Unit of Measure.
- Current Location.
- Stock Status.

### 4.4. Company Information

- Company.

### 4.5. Cost Information

- Total Value.
- Average Cost.
- Cost.

### 4.6. Description

- Description or additional notes.

### 4.7. Traceability

- Related receipts or production records.
- Transfers.
- Issues and deliveries.
- Returns.
- Inventory adjustments.
- Other relevant inventory movements.

### 4.8. Activity History

- Created By.
- Created Date.
- Updated By.
- Updated Date.
- Relevant record activity.

The proposed sections and fields should be evaluated against existing data structures and functionality before implementation.

## 5. Verification and Implementation Considerations

Before implementing the recommendations, the following points should be investigated:

1. What tracking options are available in the product's Tracking By configuration?
2. Are lot and serial number records created manually, automatically through receipts, or through both methods?
3. How are On Hand Quantity, Total Value, Average Cost, and Cost calculated?
4. Are supplier, receipt, expiration, and movement details already stored in other parts of the system?
5. How does the system validate duplicate lot and serial numbers?
6. Are lot and serial number restrictions enforced during receipts, transfers, issues, returns, and adjustments?
7. What data can be imported and exported, and what validations are performed during import?

These checks will help identify existing capabilities and avoid developing duplicate functionality.

## 6. Expected Outcomes

Implementing appropriate improvements could provide the following benefits:

- More reliable product identification.
- Improved lot and serial number traceability.
- Better visibility into product location and movement history.
- Improved expiration management.
- Stronger data validation and inventory control.
- Easier identification of affected products during quality investigations or recalls.
- Improved usability when managing large numbers of tracked products.
- More flexible searching and reporting.

## 7. Conclusion

The existing Lots / Serial Numbers functionality provides a foundation for identifying products and maintaining associated inventory information.

The current list view already supports useful search, filtering, grouping, saved searches, column management, and import/export operations.

Further improvements should focus on clearer tracking-type identification, enhanced batch and serial number information, expiration management, traceability, additional search criteria, and data validation.

Before making changes, the existing functionality should be tested and compared with the proposed improvements to ensure that development addresses actual gaps and supports reliable inventory management.
