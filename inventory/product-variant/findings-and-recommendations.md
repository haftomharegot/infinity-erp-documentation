# Product Variants – Findings and Recommendations

## Part I: Current System Functionality and Findings

### 1. Product Variants List

The Product Variants menu provides a separate page for viewing registered product variant records.

The reviewed page displayed **2,004 records** and provided two views:

- **List View:** Displays records in rows and columns.
- **Card View:** Displays records as individual cards, showing product names and prices.

### 1.1 List View Columns

The reviewed list displayed the following columns:

| Column | Meaning |
|---|---|
| Internal Reference | Product identification reference. |
| Barcode | Barcode associated with the record. |
| Name | Name of the product or variant. |
| Variant Values | Values associated with the variant, where displayed. |
| Company | Associated company. |
| Sales Price | Displayed selling price. |
| Cost | Displayed cost. |
| Product Category | Assigned product category. |
| Tags | Product tags. |
| Variant Tags | Tags associated with the variant. |
| Product Type | Type displayed for the record. |
| On Hand | Displayed inventory quantity. |
| Forecasted | Forecasted inventory quantity. |
| Unit | Unit of measure. |

### 1.2 Search, Filters, and Grouping

The page provides tools for organizing and locating records.

**Filters include:**
- Services
- Goods
- Combo
- Inventory Management
- Sales
- Purchase
- Favorites
- Warnings
- Archived
- Available Products
- Negative Forecasted Quantity
- Add Custom Filter

**Group By includes:**
- Product Type
- Product Category
- Product Template
- Add Custom Group

Users can also switch between List View and Card View, search records, and manage displayed columns.

**Finding:** The Product Template grouping option indicates that the system provides a way to organize records by product template. However, the relationship is not clearly presented to users in the reviewed interface.

### 2. Opening an Existing Record

Opening a record displays a form similar to the Product form.

The reviewed record contained:

- Product name
- Internal Reference
- Active status
- Stock Issue History
- Pricelists
- Documents
- On Hand quantity

Available actions included:

- Update Quantity
- Replenish
- Print Labels
- More actions

The form contains the following tabs:

- General Information
- Sales
- Purchase
- Inventory
- Accounting
- Stock Issue History

The General Information tab displays Sales, Purchase, Logistics, and Notes sections.

**Finding:** Individual records can be opened and managed through a product-style form. The form is similar to the existing Product form, and the interface does not clearly explain the distinction between a product record and a product variant.

### 3. Creating a New Record

The New button opens a Create Product form.

The observed form contains:

- Product Name
- Product Type: Goods, Service, and Combo
- Category
- Can be Sold
- Can be Purchased
- Invoicing Policy
- Sales Price
- Sales Taxes
- Cost
- Internal Reference
- Barcode
- Purchase Taxes
- Company
- Sales Description
- Purchase Description
- Internal Notes
- Customer Notes
- Warranty (Months)

The form also provides these tabs:

- General Information
- Sales
- Purchase
- Inventory
- Accounting
- Stock Issue History

**Finding:** The creation form resembles the general Product form. It does not visibly provide the Attributes & Variants configuration found in the Products form.

### 4. Overall Findings

The current Product Variants workflow provides a separate interface for listing, viewing, and creating records.

However, several aspects of its organization may confuse users:

1. **Similarity to Products:** The list and forms contain many of the same product-related fields and information.
2. **Unclear Variant Identification:** Variant Values and Variant Tags are available as columns, but the interface does not clearly demonstrate how they distinguish individual variants.
3. **Unclear Product Template Relationship:** Product Template is available as a grouping option, but the relationship between a template and its individual variants is not clearly communicated.
4. **Unclear Creation Process:** The New form resembles general product creation and does not visibly explain how a new record becomes associated with a product template.

## Part II: Recommendations for Improvement

### 5. Clarify the Relationship Between Products and Variants

The system should clearly identify the Product Template associated with each variant.

- Display the parent Product Template on the variant record.
- Provide a direct link to open the associated product template.
- Make the relationship visible in the Product Variants list.

### 6. Improve Variant Identification

Users should be able to distinguish variants belonging to the same product easily.

- Display Variant Values clearly in the list and record form.
- Show the selected attribute values prominently.
- Make Variant Tags understandable and distinguishable from ordinary product tags.

### 7. Clarify Variant Creation and Management

The system should make the purpose of the Product Variants New button clear.

- Provide a clear way to create a variant under its parent Product Template.
- Make the relationship between the template and the new variant visible during creation.
- If independent creation is intended, clearly explain how it differs from creating a regular product.

### 8. Conclusion

The Product Variants workflow provides a separate interface for displaying and managing individual records. However, its similarity to the Products workflow makes the purpose and relationship of the two areas unclear.

The main improvement should be to make the parent Product Template, variant values, and creation process clear to users without unnecessarily duplicating the existing Product functionality.
