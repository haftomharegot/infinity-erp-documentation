# Products – Findings and Recommendations

## 1. Introduction

This document presents the findings from reviewing the Products workflow in Infinity ERP. It explains the purpose of the available features, fields, tabs, and information displayed in the system. It also examines how product information is used across inventory, purchasing, sales, and accounting activities.

The document is divided into two main parts:

1. **Current System Functionality and Findings:** Explains the existing system, the meaning and purpose of its features, and observations about how the information is organized.
2. **Recommendations for Improvement:** Proposes changes to make the Products workflow simpler, clearer, more consistent, and easier for users to operate.

The first part describes the system as observed. The second part presents proposed improvements and should not be interpreted as existing functionality.

# Part I: Current System Functionality and Findings

## 2. Products List

The Products list is the central place for viewing and accessing registered product records.

It allows users to search, filter, group, and display product information.

### 2.1 Summary Indicators

The reviewed Products page displayed the following indicators as an example:

| Indicator | Displayed Value | Meaning |
|---|---:|---|
| Visible Products | 2,004 | Number displayed as the visible product count. |
| On Hand | 2,148 | Inventory-related quantity indicator. |
| Forecasted | 1,969 | Forecasted inventory indicator. |
| Needs Reordering | 1,998 | Indicator associated with products requiring replenishment. |

**Explanation of the indicators:**

- **Visible Products:** Indicates the number of product records included in the current view or summary.
- **On Hand:** Represents the inventory quantity currently recorded for products.
- **Forecasted:** Represents the expected inventory position after considering relevant incoming and outgoing quantities.
- **Needs Reordering:** Indicates products identified by the system as requiring replenishment based on applicable replenishment conditions.

**Finding:** The Products page combines product-record information with inventory-related summary indicators.

### 2.2 Product List Columns

The reviewed Products list displays the following columns:

| Column | Explanation |
|---|---|
| Product | Name of the registered product. |
| Responsible | User responsible for the product record. |
| Tags | Labels associated with the product for additional organization or identification. |
| Barcode | Barcode assigned to the product, where available. |
| Company | Company associated with the product. |
| Sales Price | Price configured for selling the product. |
| Cost | Cost information associated with the product. |
| Product Category | Classification assigned to the product. |
| Product Type | Type of product, such as Goods or Service. |
| On Hand | Current displayed inventory quantity. |
| Forecasted | Expected inventory quantity based on relevant inventory information. |
| Stock Status | Inventory-related status displayed for the product. |
| Unit | Unit of measure used for the product. |
| Status | Status of the product record. |

**Understanding the displayed information:**

The Product, Responsible, Tags, Barcode, Company, Sales Price, Cost, Product Category, Product Type, and Unit columns provide information about the product record.

On Hand, Forecasted, and Stock Status provide inventory-related information associated with the product.

This means that the list is not limited to displaying product information. It also provides users with a summarized view of the inventory position associated with each product.

### 2.3 Search and Record Organization

The Products list provides several tools:

- Search
- Filters
- Group By
- Favorites
- Saved searches
- List and card views
- Column selection
- Import
- New Product

**Explanation:**

- **Search:** Helps users locate product records using searchable information.
- **Filters:** Restrict the displayed records according to selected conditions.
- **Group By:** Organizes product records into groups based on selected fields.
- **Favorites:** Allows users to save useful searches or views for later access.
- **List View:** Displays product records in rows and columns.
- **Card View:** Displays records in a card-based layout.
- **Column Selection:** Allows users to control which columns are displayed.
- **Import:** Supports importing product information from external data files.
- **New Product:** Opens the form for creating a new product record.

These tools support product record management and make it easier to work with a large number of products.

## 3. Product Record and Configuration

Opening an existing product or selecting **New Product** provides access to the product form.

The reviewed form organizes product information into several tabs. Each tab covers a different aspect of the product's use across the organization.

### 3.1 General Information

The General Information tab contains basic identity, commercial, inventory, logistics, and descriptive information associated with a product.

#### 3.1.1 Core Details

The fields include:

| Field | Meaning |
|---|---|
| Product Name | Name used to identify the product. |
| Product Type | Defines the type of product. The observed options are Goods, Service, and Combo. |
| Category | Category used to classify the product. |
| Reference | Internal product reference or identification code. |
| Barcode | Barcode associated with the product. |
| Company | Company associated with the product record. |
| Visible to All | Setting related to product visibility across the relevant company context. |
| Can be Sold | Indicates whether the product is available for sales activities. |
| Can be Purchased | Indicates whether the product is available for purchasing activities. |

**Understanding Product Type:**

- **Goods:** Represents physical items that can be purchased, stored, issued, transferred, or sold.
- **Service:** Represents a service rather than a physical inventory item.
- **Combo:** Indicates a combined product type.

The **Can be Sold** and **Can be Purchased** settings determine whether the product is intended to participate in the corresponding business processes.

For example, a spare part may be configured for both purchasing and sales activities, while a service may be configured for sales without being managed as a physical inventory item.

#### 3.1.2 Pricing and Taxes

The fields include:

| Field | Meaning |
|---|---|
| Sales Price | Configured selling price of the product. |
| Sales Taxes | Taxes associated with selling the product. |
| Cost | Cost information associated with the product. |
| Purchase Taxes | Taxes associated with purchasing the product. |
| Invoicing Policy | Defines the policy used to determine invoicing quantities. The observed example was Ordered quantities. |

**Sales Price:** Represents the price at which the organization intends to sell the product.

**Cost:** Represents the product's cost information. It should not automatically be assumed to be identical to the product's current inventory valuation or the price paid to every supplier.

**Sales Taxes and Purchase Taxes:** Separate tax configurations are provided because selling and purchasing transactions may have different tax treatments.

**Invoicing Policy:** Determines the basis used for invoicing the product. The observed example, Ordered quantities, indicates that the ordered quantity is used as the invoicing basis. Other available policies and their exact behavior require verification.

**Observation:** The reviewed form displayed different currency symbols in different areas: Sales Price displayed a dollar symbol, Cost displayed Br, and supplier information in the Purchase tab displayed ETB. The reason for these differences has not been established.

#### 3.1.3 Inventory and Logistics

The fields include:

| Field | Meaning |
|---|---|
| Track Inventory | Setting related to whether inventory tracking applies to the product. |
| Tracking By | Defines the tracking method. The observed example was By Quantity. |
| Unit of Measure | Main measurement unit used for the product. |
| Purchase UoM | Unit of measure used when purchasing the product. |
| Weight | Weight information, displayed in kilograms. |
| Volume | Volume information, displayed in cubic meters. |
| Responsible | User responsible for the product. |
| Routes | Routes associated with product procurement or inventory operations. |
| Packaging | Packaging configuration associated with the product. |
| Shelf Life | Shelf-life information where applicable. |
| HS Code | Harmonized System code used for relevant product classification and trade purposes. |

**Track Inventory and Tracking By:**

These fields are related to how the system manages inventory for a product.

Track Inventory concerns whether inventory tracking applies to the product. Tracking By indicates the selected tracking method.

**Unit of Measure and Purchase UoM:**

A product may have one unit used for its general inventory and operational activities and another unit used when purchasing it.

For example, a supplier may sell a material in boxes while the organization manages or issues it in individual pieces. Where supported, unit conversion is necessary to maintain accurate quantities.

**Weight and Volume:**

These fields describe the physical characteristics of a product and may be useful for transportation, storage, logistics, and handling.

**Routes:**

Routes define how a product may be supplied, procured, or handled through relevant inventory operations.

**Packaging:**

The Packaging field is available in the product form. Its exact relationship with the separate Packages workflow has not yet been established. A packaging configuration and a physical package record should not automatically be treated as the same thing.

**Shelf Life:**

Provides information relevant to products that have a limited usable period or expiration date. Its exact relationship with lot tracking and expiry management requires further verification.

**HS Code:**

A product classification code used in relevant customs and international trade processes.

#### 3.1.4 Product Notes

The observed fields include:

- Sales Description
- Purchase Description
- Internal Notes
- Customer Notes
- Warranty (Months)

**Sales Description:** Information that can be used to describe the product in sales-related documents.

**Purchase Description:** Information intended to support purchasing activities and supplier-related documents.

**Internal Notes:** Additional information intended for internal users.

**Customer Notes:** Additional information intended for customers or service teams, as indicated by the field guidance.

**Warranty (Months):** The warranty period associated with the product, expressed in months.

The separation between internal, customer-facing, sales, and purchasing descriptions allows product information to serve different purposes.

### 3.2 Attributes and Variants

The Attributes & Variants tab provides fields for defining product attributes and their values.

The observed form contains:

- Attributes
- Values
- Add a line

**Attributes:** Characteristics used to describe or differentiate products.

**Values:** Specific options or characteristics associated with an attribute.

For example:

| Attribute | Possible Values |
|---|---|
| Size | Small, Medium, Large |
| Material | Plastic, Steel |
| Color | Red, Blue, Black |

These are illustrative examples, not actual records observed in the system.

The purpose of attributes is to describe product characteristics and, where supported, provide the basis for managing different product options or variants.

The exact behavior for generating and managing variants from these attribute lines has not yet been verified.

### 3.3 Sales

The Sales tab contains sales-related configuration.

#### 3.3.1 Upsell and Cross-Sell

**Optional Products**

This field is intended to associate other products that may be suggested alongside the selected product during sales activities.

For example, when a customer purchases a particular machine, related accessories or spare parts may be suggested.

#### 3.3.2 Extra Information

The observed fields include:

| Field | Meaning |
|---|---|
| Tags | Labels used to organize or identify the product. |
| Quotation Description | Additional description used in quotation-related information. |
| Warning when Selling this Product | Setting related to displaying a warning during sales activities. |
| Warning | Message or warning configuration. The observed example displayed No Message. |
| Expense | Expense-related setting associated with the product. |
| Re-Invoice Costs | Defines how related costs may be reinvoiced. The observed options were No, At Cost, and Sales Price. |

**Re-Invoice Costs:**

The observed options indicate three possible treatments:

- **No:** Do not reinvoice the related cost through this setting.
- **At Cost:** Reinvoice at the recorded cost.
- **Sales Price:** Reinvoice using the configured sales price.

The precise conditions under which these options apply should be confirmed through the relevant sales and expense workflows.

### 3.4 Purchase

The Purchase tab contains supplier-related product information.

The inspected supplier table included an example with:

- Supplier: Example PLC
- Quantity: 1.00
- Price: 2,500.00
- Currency: ETB

**Supplier:** Identifies the vendor associated with the product.

**Quantity:** Displays the quantity associated with the supplier's pricing information. The exact meaning of this quantity requires confirmation from the complete table configuration.

**Price:** Represents the supplier-specific price recorded for the product.

**Currency:** Identifies the currency in which the supplier price is expressed.

This section allows product records to contain supplier-specific purchasing information rather than relying only on a general product cost.

### 3.5 Inventory

The Inventory tab contains additional information related to inventory operations and logistics.

#### 3.5.1 Operations

The observed Routes options include:

- Buy
- Manufacture

**Buy:** Represents procurement through purchasing.

**Manufacture:** Represents obtaining the product through a manufacturing process.

The exact operational consequences of selecting each route depend on the system's inventory and procurement configuration.

#### 3.5.2 Logistics

The fields include:

- Responsible
- Weight
- Volume
- Customer Lead Time
- Packaging

**Customer Lead Time:** The number of days associated with the expected time required to make the product available to the customer.

The inspected form displayed the value in days.

Some of these fields also appear in General Information, indicating that product logistics information is available in more than one tab.

#### 3.5.3 Inventory Document Descriptions

The observed fields include:

- Description for Receipts
- Description for Delivery Orders
- Description for Internal Transfers

These fields provide descriptions or instructions associated with different inventory documents.

Their purpose is to provide relevant information during inventory operations involving receiving products, delivering products, and transferring products internally.

### 3.6 Accounting

The Accounting tab provides product-related financial account configuration.

The observed sections and fields include:

**Receivables**

- Income Account

**Payables**

- Expense Account
- Price Difference Account

**Income Account:** The account associated with income generated from relevant product transactions.

**Expense Account:** The account associated with relevant product expenses.

**Price Difference Account:** An account intended to record relevant differences between product prices or costs, depending on the configured accounting process.

The inspected example for the Expense Account was:

`6200-00-006 Material Sales Expenses - 006 Branch1`

The exact accounting entries generated by these settings should be understood in coordination with the Finance module and its accounting configuration.

### 3.7 EOQ

The EOQ tab provides information related to Economic Order Quantity.

Economic Order Quantity is an inventory planning concept used to estimate an appropriate order quantity by balancing ordering costs and inventory holding costs.

The observed form contains two sections.

#### 3.7.1 Demand and Cost Drivers

| Field | Meaning |
|---|---|
| Annual Demand (D) | Estimated demand for the product over one year. |
| Order Cost (S) | Cost associated with placing or processing an order. |
| Holding Cost (H) | Cost associated with keeping inventory over a period. |

#### 3.7.2 Computed EOQ

| Field | Meaning |
|---|---|
| Economic Order Quantity (EOQ) | Calculated or recorded recommended order quantity. |
| Last Reorder Alert | Information associated with the most recent reorder alert. |

The general EOQ model is:

\[
EOQ = \sqrt{\frac{2DS}{H}}
\]

Where:

- D = Annual Demand
- S = Ordering Cost
- H = Annual Holding Cost per unit

The reviewed form displayed zero values for the numerical fields.

The calculation method, automatic calculation behavior, and relationship with the actual replenishment process have not yet been verified.

### 3.8 Stock Issue History

The Stock Issue History tab provides stock issue information associated with the selected product.

The inspected record displayed:

**Stock Issue Overview**

- Total stock issue lines: 3

The example visible records included:

| Reference | Date | User | Department | Location | Displayed Quantity | Unit | Amount |
|---|---|---|---|---|---:|---|---:|
| SIV26-00001 | 08/11/2026 | systemuser | 1 | AA/Stock | 20.00 | Pcs | 2,000.00 |
| SIV26-00004 | 10/31/2026 | systemuser | ---2 | AA/Input | 12.00 | Pcs | 0.00 |
| SIV26-00005 | 10/31/2026 | systemuser | It | AA/Input | 3.00 | Pcs | 300.00 |

The displayed total quantity was 35.00.

**Stock Issue Voucher (SIV):** A reference associated with the stock issue records displayed in this section.

The tab provides product-related historical information about stock issue activities.

## 4. Overall Findings About the Current System

The Products workflow provides a broad range of product information and configuration options. It connects product definitions with several business functions, including inventory, purchasing, sales, logistics, accounting, and inventory planning.

However, the review reveals several characteristics of the current design.

### 4.1 Product Information and Inventory Information Are Combined

The Products page displays product information alongside inventory-related indicators such as On Hand, Forecasted, and Stock Status.

These are related but different types of information. Their combination may make it difficult for inexperienced users to understand the purpose of each displayed value.

### 4.2 Product Configuration Is Distributed Across Many Tabs

The product form contains multiple tabs for different business functions.

Although this provides extensive configuration options, users must navigate several areas to understand the complete product record.

Some information, including Responsible, Weight, Volume, and Packaging, appears in more than one tab.

### 4.3 Some Fields Require Business or Technical Knowledge

Several fields have meanings that may not be immediately clear to ordinary users.

Examples include:

- Track Inventory
- Tracking By
- Invoicing Policy
- Routes
- Re-Invoice Costs
- EOQ
- Price Difference Account
- Last Reorder Alert

Without appropriate descriptions and guidance, users may have difficulty deciding what values to select.

### 4.4 Different Business Functions Are Combined in One Product Record

The product record includes information used by several departments.

For example:

- Sales uses pricing, descriptions, optional products, and warnings.
- Purchasing uses suppliers and supplier prices.
- Warehouse operations use tracking, units, logistics, and routes.
- Finance uses income and expense accounts.
- Inventory planning uses demand, order cost, holding cost, and EOQ.

This makes the product record an important shared source of information, but it also increases the complexity of product creation and maintenance.

### 4.5 Some System Behavior Is Not Clear from the Interface

Certain fields and indicators are displayed without enough information to explain their exact behavior.

Examples include:

- Product summary indicators.
- Tracking configuration.
- Product variant generation.
- Product cost and valuation relationship.
- EOQ calculation and replenishment integration.
- Packaging configuration.
- Some Stock Issue History columns.
- The currency differences displayed in the product form.

These areas require additional functional verification before their behavior can be documented as confirmed.

# Part II: Recommendations for Improvement

## 5. Overall Design Recommendation

The Products workflow should be redesigned around one primary objective:

**Make it easy for users to create, identify, understand, and maintain products without requiring them to understand every inventory, purchasing, sales, and accounting configuration detail.**

The system should separate basic product information from advanced configurations while maintaining the necessary connections between business functions.

A user registering a simple product should not have to understand EOQ, accounting configuration, supplier pricing, and advanced inventory tracking before completing the basic registration.

## 6. Recommended Product Information Structure

The recommendation is to organize product information into the following logical areas.

### 6.1 Basic Information

This should contain the essential information required to identify and classify a product.

Recommended fields:

- Product Name
- Product Type
- Internal Reference
- Product Category
- Barcode
- Company
- Active/Inactive Status
- Can be Sold
- Can be Purchased

This should be the simplest and most accessible part of the product form.

### 6.2 Units and Inventory Settings

This area should contain the settings needed to determine how a product is managed in inventory.

Recommended fields:

- Track Inventory
- Tracking Method
- Unit of Measure
- Purchase Unit of Measure
- Weight
- Volume
- Shelf Life
- Routes
- Responsible User

Fields should appear according to the product type and inventory requirements.

For example, a service should not display unnecessary physical inventory settings.

### 6.3 Sales Information

This area should contain:

- Sales Price
- Sales Taxes
- Invoicing Policy
- Sales Description
- Customer Notes
- Warranty
- Optional Products
- Sales Warnings
- Sales Tags

Only sales-related settings should appear in this section.

### 6.4 Purchase Information

This area should contain:

- Suppliers
- Supplier-specific Product References
- Supplier Prices
- Purchase Taxes
- Purchase Description
- Purchase Unit of Measure
- Purchasing Lead Time, where applicable

Supplier information should be easy to add and manage without making basic product creation unnecessarily complicated.

### 6.5 Accounting Information

Accounting configuration should be placed in a dedicated advanced section.

Recommended fields:

- Income Account
- Expense Account
- Price Difference Account
- Other relevant accounts when necessary

Where possible, accounts should be populated automatically using suitable company or product-category defaults.

Manual configuration should remain available for authorized users who need it.

### 6.6 Additional Information

This area should contain:

- Internal Notes
- Technical Descriptions
- Attachments
- Product Documentation
- Additional Tags
- Relevant Operational Instructions

This prevents optional descriptive information from making the main product form unnecessarily complicated.

## 7. Separate Product Information from Inventory Information

The system should make the distinction between a product record and its inventory position clear.

### 7.1 Product Information

The product record should focus on:

- What the item is.
- How it is identified.
- How it is classified.
- How it is purchased or sold.
- Which units are used.
- Which settings apply to it.

### 7.2 Inventory Information

Inventory information should focus on:

- How much is currently available.
- Where the product is stored.
- How much is reserved.
- How much is incoming.
- How much is outgoing.
- How much is forecasted.
- How inventory quantities change over time.

### 7.3 Recommended Product Record Layout

The product record may retain a useful inventory summary, but it should clearly separate product details from inventory information.

For example:

**Product Information**

- Product Name
- Internal Reference
- Category
- Product Type
- Unit of Measure
- Sales Price
- Cost

**Inventory Summary**

- On Hand
- Available
- Reserved
- Incoming
- Outgoing
- Forecasted

The inventory summary should provide access to detailed inventory information without making the product-definition process unnecessarily complicated.

## 8. Simplify Product Creation

The New Product form should support a straightforward registration process.

Recommended improvements:

- Make essential fields clearly identifiable.
- Use sensible default values.
- Avoid requiring optional information during initial registration.
- Show advanced configuration only when needed.
- Display fields according to the selected Product Type.
- Provide short explanations beside technical fields.
- Group related information logically.
- Use consistent field names and units.
- Provide clear validation messages.

The system should allow users to create a basic product first and complete additional configuration later when necessary.

## 9. Improve Product List and Summary Indicators

The Products list should make it easy for users to understand the information being displayed.

Recommended improvements:

- Clearly identify the number of product records.
- Display inventory quantities with their relevant units.
- Explain On Hand, Available, Reserved, Incoming, Outgoing, and Forecasted.
- Ensure that Needs Reordering reflects actual replenishment conditions.
- Allow users to access detailed inventory information from the relevant summary indicators.
- Provide clear and consistent product status information.

The summary indicators should provide useful information rather than confusing users with unexplained numbers.

## 10. Improve Field Guidance and Terminology

The system should use language that ordinary users can understand.

Recommended improvements:

- Add short descriptions to technical fields.
- Explain the purpose of tracking methods.
- Explain the difference between product units and purchase units.
- Provide clear explanations of routes.
- Explain the meaning of EOQ and its input values.
- Use consistent terminology throughout the system.
- Avoid unnecessary technical abbreviations.
- Provide examples where a field requires specialized knowledge.

For example, instead of displaying only **Tracking By**, the system could explain that the field determines how inventory is identified and tracked.

## 11. Improve Product Classification and Data Consistency

The system should support a consistent product structure across departments.

Recommended improvements:

- Establish clear product naming conventions.
- Define a consistent internal reference structure.
- Prevent unintended duplicate product references.
- Validate barcodes where applicable.
- Use a clear product category structure.
- Avoid unnecessary duplication of product records.
- Provide appropriate default settings based on product category and type.
- Ensure that product information is consistent across related business modules.

## 12. Improve Integration with Other Business Functions

Product information should be available to the relevant business processes without requiring repeated data entry.

Recommended improvements:

- Ensure that purchasing uses the correct product and supplier information.
- Ensure that sales uses the correct product descriptions, prices, and taxes.
- Ensure that inventory operations use the correct units, tracking settings, and logistics information.
- Ensure that accounting uses valid product-related financial configurations.
- Ensure that product-related inventory history can be accessed from the relevant product record.
- Avoid duplicating the same information across different modules.

## 13. Improve Advanced Features

Advanced functionality should remain available without making the basic product form difficult to use.

### 13.1 Attributes and Variants

- Make the relationship between attributes, values, and product variants clear.
- Explain how variants are generated or managed.
- Provide an understandable way to review available product options.
- Avoid displaying advanced variant configuration for products that do not require it.

### 13.2 EOQ and Replenishment

- Explain the purpose of EOQ.
- Clarify the meaning of Annual Demand, Order Cost, and Holding Cost.
- Calculate EOQ automatically where the required information is available.
- Display a clear result and explain its meaning.
- Connect replenishment recommendations with the relevant inventory workflow where appropriate.

### 13.3 Accounting Configuration

- Provide suitable default accounts.
- Explain the purpose of each account field.
- Restrict account selection to valid configured accounts.
- Keep advanced accounting settings accessible to authorized users.

### 13.4 Product History

- Provide clear access to related stock issue and other relevant product activities.
- Identify the source transaction.
- Explain all displayed quantities and amounts.
- Provide useful filters and links to the original documents.

## 14. Conclusion

The current Products workflow provides extensive capabilities for defining products and configuring their use across the organization. However, its broad scope and the way information is distributed across multiple tabs can make it difficult for ordinary users to understand and operate.

The most important improvement is to make basic product registration straightforward, organize advanced settings logically, and make the purpose of technical fields and displayed information clear.

The recommended design should present only the information relevant to the user's task, provide guidance where specialized knowledge is required, and maintain reliable integration with purchasing, sales, inventory, and accounting.

The objective is not to remove important functionality. It is to organize that functionality in a way that makes the system easier to understand, easier to use, and more reliable for every department.
