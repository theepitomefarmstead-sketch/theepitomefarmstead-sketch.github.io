# The Epitome Integrated Organic Farm

**Tagline:** Regeneration for Generations  
**Focus:** Regenerative agriculture · Integrated farming · Resilient local food systems · Community

> The Epitome Integrated Organic Farm is a regenerative, permaculture-based farm project in Kathmandu Valley. Its digital platform is intended to help document and coordinate farm operations, connect production with local markets and CSA members, and build a measurable foundation for ecological and economic resilience.

## Project Vision

The wider initiative, **Regeneration for Generations**, aims to develop a resilient eco-community and local food system by integrating ecological restoration, viable farm enterprises, community participation, and responsible land stewardship.

The project is designed to begin with a practical pilot, validate its farming and business systems, document what works, and progressively adapt the model for other farms and communities. The digital platform will support that process by making farm records, activities, production, finances, and ecological observations easier to organize and review.

## Guiding Principles

The project proposal describes four connected “engines” that work together:

### 1. Ecological — Closed-Loop Permaculture

Develop integrated farm systems that cycle resources and reduce dependence on external inputs. Examples include poultry, on-farm feed production, black soldier fly larvae (BSFL), azolla, composting, vermicomposting, crop production, and soil regeneration.

### 2. Economic — Viable Farm Enterprises

Support practical routes from farm production to income, including Community Supported Agriculture (CSA), direct sales, farm products, and value-added products. Farm-stay and eco-retreat activities may be introduced as the farm's core systems become established.

### 3. Social — Community and Knowledge Sharing

Build relationships among farmers, landowners, CSA members, volunteers, learners, and local communities through training, farm visits, transparent information, and shared learning.

### 4. Ethical — Land Stewardship

Encourage long-term care of agricultural land, responsible resource use, transparency, and fair participation in the value created by regenerative farming.

## Why a Digital Platform?

The proposed platform is intended to help the farm:

- Maintain organized operational records.
- Track crops, livestock, inputs, harvests, and inventory.
- Record purchases, sales, income, expenses, and budgets.
- Coordinate staff, tasks, suppliers, and farm activities.
- Support CSA and direct-market workflows as they are introduced.
- Store links to farm documents, photographs, receipts, and reports.
- Record observations related to soil, water, land use, and ecological outcomes.
- Produce useful summaries for farm management and project reviews.
- Build a documented evidence base for future replication and, if pursued, environmental monitoring and Measurement, Reporting and Verification (MRV).

The platform is intended to evolve in step with the farm. It should not attempt to automate every enterprise before the underlying farm workflows have been tested.

## Intended Technology Architecture

The agreed initial architecture uses the following services and tools:

| Layer | Technology | Intended role |
|---|---|---|
| Source control | GitHub | Store code, specifications, issues, and project history |
| Public website | GitHub Pages | Host static/public-facing pages and documentation |
| Farm management application | Streamlit | Provide interactive dashboards, forms, tables, and reports |
| Application language | Python | Implement data processing, validation, and business logic |
| Primary operational data store | Google Sheets | Store structured farm records during the initial stage |
| File and document storage | Google Drive | Store larger files such as photographs, documents, invoices, and reports |
| Sheets integration | Google Sheets API / `gspread` | Read and write approved operational data |
| Charts and analytics | Plotly and/or Altair | Display farm and financial summaries |
| Automated tests | `pytest` | Test validation, calculations, data access, and critical workflows |
| Future spatial analysis | QGIS, GeoPandas, Leafmap, Google Earth Engine | Support GIS, site mapping, watershed, and environmental analysis when needed |

### Deployment note

GitHub Pages serves static content; it does not host the Streamlit Python application. The Streamlit application must be deployed separately on a compatible hosting service. The public website can link to the farm management application.

### Data-access design

Google Sheets is the initial operational data store, not a traditional relational database. Application code should access it through a dedicated data-access layer rather than making spreadsheet API calls directly from every UI page.

This separation will make the code easier to test and maintain, and will help keep open the option of migrating to a database such as PostgreSQL or Supabase in a later stage.

### Security

- Do not commit credentials, service-account keys, tokens, or secrets to GitHub.
- Store deployment secrets using the hosting platform's secrets or environment configuration.
- Restrict access to private farm records and Google Sheets.
- Do not put private operational information in the public GitHub Pages site.
- Design authentication and role-based permissions before exposing sensitive operational functions.
- Validate inputs before writing records to Google Sheets.

## Planned Application Areas

The exact scope and order will be established in the project roadmap. Potential modules include:

- **Dashboard:** Farm overview, current activities, key metrics, and summaries.
- **Crops and Nursery:** Planting, crop activities, harvests, nursery stock, and crop observations.
- **Integrated Livestock:** Poultry/chickens and other livestock records, production, and feeding activities.
- **Circular Farm Systems:** BSFL, azolla, vermicompost, compost, and related resource flows.
- **Inventory:** Stock levels, inputs, supplies, and inventory movements.
- **Purchases and Suppliers:** Purchase records and supplier information.
- **Sales and Products:** Product catalogue, sales, and value-added products.
- **Finance:** Income, expenses, budgets, and basic financial reporting.
- **People and Operations:** Staff, tasks, calendar, and farm assets.
- **CSA and Community:** CSA members, participation, and related workflows when ready.
- **Farm Stay and Kitchen:** Future hospitality and food-service operations if included in the approved roadmap.
- **GIS and Ecological Monitoring:** Farm zones, infrastructure, water, watershed, land-use, and ecological observations.
- **Reports and Learning:** Operational summaries, project reporting, training resources, and documented farm protocols.

These are intended areas, not a claim that every module is already implemented.

## Development Roadmap

The wider farm initiative is described in five growth phases:

1. **Seed:** Establish and validate the pilot farm and its core systems.
2. **Sapling:** Refine the model and begin replication with additional farms.
3. **Tree:** Expand technology integration and environmental monitoring.
4. **Grove:** Strengthen cooperative operations and scale shared enterprises.
5. **Forest:** Extend the model through replication, partnerships, and wider impact.

The software roadmap will be developed incrementally to support these goals. A possible application sequence is:

1. Foundation, repository, configuration, and data access.
2. Farm dashboard.
3. Core farm operations.
4. Finance, purchases, sales, and inventory.
5. People, CSA, and service workflows.
6. GIS and ecological monitoring.
7. Analytics and reporting.
8. Future multi-farm and advanced ERP capabilities.

The software phases are implementation planning; they are not replacements for the five growth phases of the farm project. Features should be prioritized against actual farm needs, available resources, and validated workflows.

## Repository Structure

The exact structure should follow the current repository. A possible starting point is:

```text
.
├── README.md
├── CHANGELOG.md
├── requirements.txt or pyproject.toml
├── .gitignore
├── .streamlit/
│   └── config.toml
├── app/
│   ├── main.py
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── data/
│   │   ├── repositories/
│   │   └── schemas/
│   └── utils/
├── specs/
│   ├── mission.md
│   ├── tech-stack.md
│   ├── roadmap.md
│   └── features/
├── tests/
├── assets/
│   ├── images/
│   └── icons/
└── docs/
```

This is a suggested structure, not a requirement to restructure an existing repository without review.

## Development Principles

1. Read the relevant specification before implementing a feature.
2. Keep the interface practical and mobile-friendly for farm use.
3. Separate UI, business logic, and data access.
4. Use real farm data only when it has been supplied or verified; clearly label demo data.
5. Validate data and handle Google API errors gracefully.
6. Write tests for important calculations and data workflows.
7. Keep documentation, specifications, roadmap, and implementation aligned.
8. Prefer a small, reliable MVP over premature complexity.
9. Treat ecological, economic, social, and ethical outcomes as connected parts of the project.
10. Keep future migration from Google Sheets possible without overengineering the initial system.

## Getting Started

This repository's actual setup may vary. Before running the application, confirm that the required files and configuration exist.

A typical local setup for a Python/Streamlit project is:

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd <repository-directory>

# 2. Create and activate a virtual environment
python -m venv .venv

# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
# .venv\Scripts\Activate.ps1

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure secrets securely
# Add the required Streamlit secrets locally or through your deployment
# provider. Never commit secrets to GitHub.

# 5. Run the app (adjust the path to the actual entry point)
streamlit run app/main.py
```

If the repository uses `pyproject.toml` instead of `requirements.txt`, follow its documented dependency-installation process. The command above is a template; it should be updated to match the implemented repository.

## Testing

The intended test framework is `pytest`.

```bash
pytest
```

Tests should cover important data validation, business logic, calculations, repository behavior, and critical user workflows. Tests that access Google Sheets should use mocks or a dedicated test spreadsheet rather than unintentionally modifying live farm records.

## Project Status

This README describes the **project vision and intended architecture**. It does not imply that all listed features, integrations, authentication flows, or deployment environments are already implemented. Update this section as the repository evolves.

## License and Contributions

Add the project's chosen license and contribution process when they have been decided. Do not assume a license for this repository until the project owner has selected one.

---

**The Epitome Integrated Organic Farm**  
*Regeneration for Generations — Healthy Soil · Healthy Food · Healthy Communities*
