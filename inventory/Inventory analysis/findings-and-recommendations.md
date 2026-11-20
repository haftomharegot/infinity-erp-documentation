# Inventory Reporting – Findings and Recommendations

## 1. Overview

This document evaluates the organization and functionality of the Inventory Reporting section and identifies opportunities to improve its reports, information fields, filters, summaries, and analytical capabilities.

The review is based on the five existing inventory reports:

1. Stock
2. Locations
3. Moves History
4. Moves Analysis
5. Valuation

It also considers three additional reporting areas that could strengthen inventory management:

6. Inventory Aging
7. Expiry Report
8. Inventory Forecasting

The recommendations aim to improve inventory visibility, reporting accuracy, operational analysis, and management decision-making.

**Review approach:** Findings based on the current reporting screens are identified as current observations. Suggested changes are recommendations and should be evaluated against existing data structures and functionality before implementation.

## 2. Review of Existing Reporting Structure

### 2.1. Overall Assessment

The existing Inventory Reporting section provides several important perspectives on inventory information. Each report serves a different purpose and contributes to understanding inventory status, storage, movements, and financial value.

The five existing reports should remain separate because they provide different types of information:

| Existing Report | Main Purpose                                                                |
| --------------- | --------------------------------------------------------------------------- |
| Stock           | Provides an overview of product quantities and stock availability.          |
| Locations       | Shows how inventory is distributed across warehouses and storage locations. |
| Moves History   | Provides details of individual inventory movement transactions.             |
| Moves Analysis  | Summarizes and analyzes inventory movements to identify activity patterns.  |
| Valuation       | Provides information about the financial value of inventory.                |

Although some reports are related, they should not be treated as duplicates.

For example:

- **Stock and Locations:** Stock provides an overall view of product quantities, while Locations provides a more detailed view of where those products are stored.
- **Moves History and Moves Analysis:** Moves History focuses on individual inventory transactions, while Moves Analysis provides summarized information about movement activity.
- **Valuation:** Provides a financial perspective that complements the operational information available in the other reports.

Therefore, the existing reports provide a useful foundation for Inventory Reporting. Improvements should focus on strengthening their individual purposes, addressing identified data issues, and introducing additional reporting capabilities where necessary.

## 3. Recommended Additional Reports

The following reports are recommended to extend the existing Inventory Reporting capabilities.

### 3.1. Inventory Aging Report

**Purpose**

The Inventory Aging Report should show how long products have remained in inventory. It helps organizations identify old, slow-moving, and potentially obsolete stock.

**Recommended Information Fields**

- Product Name
- Product Internal Reference
- Product Category
- Warehouse
- Location
- Lot/Serial Number, where applicable
- On Hand Quantity
- Unit of Measure
- Receipt Date or Stock Age Reference Date
- Age in Days
- Age Category
- Inventory Value, where available

**Recommended Age Categories**

The report could group inventory into configurable age ranges, such as:

- 0–30 days
- 31–60 days
- 61–90 days
- More than 90 days

These ranges should be configurable to accommodate different organizational requirements and product types.

**Recommendations**

- Calculate inventory age using an appropriate stock receipt or inventory acquisition date rather than the product creation date.
- Where products are tracked by lots or batches, use the relevant receipt or lot information to determine their age.
- Consider FIFO-based aging where the inventory data supports it.
- Provide filtering and grouping by product, category, warehouse, location, and age category.
- Include inventory quantities and values for each age category where reliable valuation information is available.

### 3.2. Expiry Report

**Purpose**

The Expiry Report should identify products that are approaching their expiration dates or have already expired. It is particularly important for organizations handling chemicals, medicines, food products, and other items with limited shelf lives.

**Recommended Information Fields**

- Product Name
- Product Internal Reference
- Lot/Batch Number
- Warehouse
- Location
- On Hand Quantity
- Unit of Measure
- Manufacturing Date, where applicable
- Expiration Date
- Days Until Expiration
- Expiration Status

**Recommended Expiration Statuses**

- **Valid:** The product has not reached its expiration date and is outside the configured near-expiry period.
- **Near Expiry:** The product is approaching its expiration date within the configured warning period.
- **Expired:** The product has passed its expiration date.

**Recommendations**

- Support expiration-date tracking for products that require it.
- Use lot or batch information to identify the expiration date of specific inventory quantities.
- Allow the near-expiry warning period to be configured according to organizational requirements.
- Provide filters for expiration status, product, warehouse, location, and expiration date.
- Highlight expired and near-expiry inventory so that responsible users can take appropriate action.
- Ensure that products without expiration-date requirements are not incorrectly treated as expired or missing expiration information.

### 3.3. Inventory Forecasting Report

**Purpose**

The Inventory Forecasting Report should provide information about expected future inventory availability based on current stock, reservations, incoming quantities, and outgoing requirements.

It helps organizations anticipate potential shortages and plan replenishment activities.

**Recommended Information Fields**

- Product Name
- Product Internal Reference
- Product Category
- Warehouse
- On Hand Quantity
- Reserved Quantity
- Incoming Quantity
- Outgoing Quantity
- Forecasted Quantity
- Minimum Stock Level
- Maximum Stock Level
- Reorder Point
- Suggested Replenishment Quantity
- Expected Shortage Date, where it can be reliably calculated

**Recommendations**

- Clearly distinguish actual stock quantities from projected inventory quantities.
- Show how incoming and outgoing transactions affect expected inventory availability.
- Identify products that are expected to fall below their required stock levels.
- Provide suggested replenishment quantities based on configured minimum, maximum, or reorder levels.
- Where sufficient historical data is available, consider using consumption patterns to support demand forecasting.
- Provide filtering by product, category, warehouse, and forecast period.
- Review the existing Replenishment functionality before implementation to avoid duplicating capabilities that may already provide the required forecasting information.

## 4. Recommendations for Existing Reports

The following recommendations focus on improving the usefulness, accuracy, and clarity of the five existing reports.

### 4.1. Stock Report

The Stock Report should provide a clear overview of product quantities and availability across the organization.

**A. Recommended Additional Information**

Consider providing the following information where it is not already available:

- Internal Reference
- Product Category
- Warehouse
- Reserved Quantity
- Forecasted Quantity
- Reorder Point
- Minimum Stock Level
- Maximum Stock Level
- Stock Availability Status

**B. Recommended Summary Indicators**

Consider providing summary indicators such as:

- Total Products
- Total Inventory Quantity
- Total Inventory Value
- Total Reserved Quantity
- Total Available Quantity
- Products Below Reorder Point
- Products with Negative Stock after we review approve it

**C. Data Accuracy**

Negative on-hand quantities are visible in the current Stock.

The negative display should be removed otherwise needs note why.

The relationship between On Hand, Reserved, Free to Use, Incoming, Outgoing, and Forecasted quantities should also be clearly defined and consistently calculated.

### 4.2. Locations Report

The Locations Report should provide a clear view of inventory quantities distributed across warehouses and storage locations.

**A. Recommended Additional Information**

Consider including the following fields where they are not already available:

- Warehouse
- Location Type
- Stock Status

Additional information such as Package, Lot/Serial Number, and Owner may be useful. However, these fields should be optional because not every product or inventory record requires them.

**B. Summary Information**

Consider including:

- Total Locations
- Locations Containing Negative Stock, if negative balances are permitted or detected
- Locations Requiring Investigation, where unusual inventory balances or inconsistencies are identified

**C. Data Accuracy**

Negative quantities are visible in the Locations.

The system should investigate these records and help users identify the reasons for negative location-level balances.

It should also ensure that location-level quantities are consistent with the corresponding product-level inventory balances.

### 4.3. Moves History Report

The Moves History Report should provide detailed information about individual inventory transactions and support the review and tracking of inventory activities.

**A. Recommended Additional Information**

Consider including the following information where it is not already available:

- Operation Type
- Scheduled Date
- Completion Date
- Source Document Type
- Source Document Reference

**B. Recommended Summary Indicators**

Consider providing summary indicators such as:

- Total Movements
- Total Products Involved
- Completed Movements
- Pending Movements
- Cancelled Movements
- Total Received Quantity
- Total Delivered Quantity
- Total Internal Transfer Quantity

These indicators would help users understand the volume and status of inventory transactions without having to examine every individual movement record.

### 4.4. Moves Analysis Report

The Moves Analysis Report should provide summarized and analytical information about inventory movement activities.

**A. Recommended Summary Indicators**

Consider including indicators such as:

- Total Movement Quantity
- Total Number of Movements
- Total Receipts
- Total Deliveries
- Total Internal Transfers
- Total Unclassified Movements

These indicators should clearly distinguish external inventory movements from internal transfers.

**B. Recommended Additional Measures**

Consider providing the following analytical measures:

- Total Quantity
- Movement Count
- Average Quantity per Movement
- Total Value, where reliable valuation information is available
- Net External Movement

Net External Movement should be calculated using relevant external receipts and deliveries while excluding internal transfers. Internal transfers change the location of inventory but do not increase or decrease the organization's overall inventory quantity.

**C. Unclassified Movement Category**

The current report includes an Unclassified movement category.

The system should investigate the transactions assigned to this category and determine whether they result from missing operation types, incomplete transaction classification, or other configuration issues.

Where possible, all inventory movements should be assigned to meaningful categories to improve the accuracy and usefulness of movement analysis.

### 4.5. Valuation Report

The Valuation Report should provide reliable information about the financial value of inventory and support reconciliation with the organization's accounting records.

**A. Recommended Summary Indicators**

Consider providing summary indicators such as:

- Total Inventory Value
- Total Inventory Quantity
- Total Number of Products
- Total Valuation Entries
- Opening Inventory Value
- Incoming Inventory Value
- Outgoing Inventory Value
- Closing Inventory Value

These indicators should help users understand how inventory value changes over a selected period.

**B. Valuation Accuracy and Financial Reconciliation**

**Note**: In the Valuation, inventory quantities were displayed, but the total valuation was shown as 0.00 Br. This requires further implementation investigation to determine whether the issue is related to product costs, valuation configuration, missing valuation entries, calculation logic, currency settings, or another cause.

The system should ensure that:

- Product costs are correctly configured where required.
- The selected inventory valuation method is applied consistently.
- Inventory valuation entries are generated and calculated correctly.
- Incoming and outgoing inventory transactions update valuation appropriately.
- Displayed values use the correct company currency and precision.
- Inventory valuation information can be reconciled with the relevant Finance and Accounting records.

The valuation figures should be verified before they are used for financial reporting or management decisions.

## 5. Cross-Report Improvements

The existing Inventory Reports already provide several common reporting capabilities, including filtering, column selection, and grouping.

Rather than recommending these capabilities as entirely new features, the following recommendations focus on improving their consistency, usability, and effectiveness across the reporting section.

### 5.1. Consistent Filtering and Search

Ensure that common filters behave consistently across reports.

Common filters may include:

- Date Range
- Product
- Product Category
- Warehouse
- Location
- Company

Additional report-specific filters should be provided where relevant, such as:

- Lot/Serial Number
- Operation Type
- Expiration Status
- Stock Availability Status
- Inventory Age Category

### 5.2. Configurable Columns

Improve the usability and consistency of column selection across reports.

Users should be able to select relevant information fields and arrange the displayed columns according to their reporting needs, where supported.

### 5.3. Grouping and Analytical Views

Improve the available grouping options to make inventory information easier to analyze.

Depending on the report, useful grouping dimensions may include:

- Product
- Product Category
- Warehouse
- Location
- Date or Period
- Operation Type
- Lot/Serial Number
- Expiration Status
- Inventory Age Category

Where practical, users should be able to move from summarized information to the underlying records for further investigation.

### 5.4. Export and Printing

Review the existing export and printing capabilities to ensure that reports can be shared and used outside the ERP system.

Where improvements are needed, consider:

- Exporting report data to Excel or CSV.
- Printing reports in a readable format.
- Ensuring exported information respects the selected filters and grouping.
- Including relevant report titles, dates, and applied filters in exported or printed outputs.

### 5.5. Data Accuracy and Consistency

Ensure that inventory information is calculated and presented consistently across all reports.

In particular:

- Stock quantities should be consistent across Stock and Locations reports.
- Inventory movement information should be consistent between Moves History and Moves Analysis.
- Inventory valuation should be consistent with relevant valuation entries and accounting records.
- Lot/serial and expiration information should be consistent with the related product and inventory records.
- Negative or unusual inventory balances should be identifiable and investigated.

### 5.6. Access Control

Review reporting access permissions to ensure that users can view information appropriate to their responsibilities.

Where necessary, consider restricting access to sensitive financial information, company-specific inventory data, and other reports according to user roles and organizational requirements.

## 6. Recommended Inventory Reporting Structure

Based on the review, the following structure is recommended for the Inventory Reporting section:

| No. | Report                | Main Purpose                                                               |
| --- | --------------------- | -------------------------------------------------------------------------- |
| 1   | Stock                 | Monitor product quantities and inventory availability.                     |
| 2   | Locations             | Understand inventory distribution across warehouses and storage locations. |
| 3   | Moves History         | Review individual inventory movement transactions.                         |
| 4   | Moves Analysis        | Analyze summarized inventory movement activities and patterns.             |
| 5   | Valuation             | Monitor the financial value of inventory.                                  |
| 6   | Inventory Aging       | Identify old and slow-moving inventory.                                    |
| 7   | Expiry Report         | Monitor products approaching or exceeding their expiration dates.          |
| 8   | Inventory Forecasting | Estimate future inventory availability and replenishment requirements.     |

The five existing reports should be retained, while the three additional reports should be evaluated for implementation based on organizational needs, available data, and existing system capabilities.

## 7. Implementation Priorities

The following priorities are suggested to help organize the recommended improvements. Actual implementation should be determined after technical review and confirmation of business requirements.

| Priority | Recommendation                                 | Reason                                                                                          |
| -------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| High     | Investigate Stock and Valuation accuracy.      | Existing figures require verification, particularly negative quantities and zero valuation.     |
| High     | Improve Moves History and Moves Analysis.      | These reports provide essential inventory transaction and operational analysis.                 |
| High     | Evaluate the Expiry Report.                    | It helps organizations monitor expiring and expired products where expiration tracking applies. |
| Medium   | Evaluate Inventory Aging.                      | It helps identify old and slow-moving inventory.                                                |
| Medium   | Evaluate Inventory Forecasting.                | It supports proactive stock and replenishment planning.                                         |
| Medium   | Improve Stock and Locations reporting.         | It provides better visibility into stock availability and distribution.                         |
| Medium   | Improve Valuation analysis and reconciliation. | It supports reliable inventory-related financial reporting.                                     |
| Medium   | Improve cross-report consistency.              | It makes reporting capabilities more consistent and easier to use.                              |

## 8. Verification and Implementation Considerations

Before implementing the recommendations, the following points should be verified:

1. **Existing Functionality:** Confirm which recommended fields, indicators, filters, and analytical capabilities are already available in the system.
2. **Data Availability:** Verify that the required information exists and is reliably maintained in the relevant inventory records.
3. **Calculation Logic:** Confirm the formulas and business rules used to calculate quantities, inventory age, expiration status, forecasts, and valuation.
4. **Report Consistency:** Compare related reports to identify differences or inconsistencies in inventory quantities, movements, and values.
5. **Configuration Requirements:** Determine which features should be configurable to support different organizational and operational requirements.
6. **Performance:** Evaluate the effect of additional calculations, filters, and analytical views on report loading and system performance.
7. **User Requirements:** Confirm the usefulness and priority of the proposed improvements with the relevant inventory, warehouse, purchasing, and finance users.

##
