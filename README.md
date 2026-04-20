# Relational Database Systems — PostgreSQL Assignments

Two assignments from the Relational Database Systems course at UQ, implementing advanced PostgreSQL features on a library management system database.

## Assignment 1 — Triggers, Constraints & Stored Functions

**File:** `assignment1_triggers_constraints.sql`

- **Q1** — `CHECK` constraint enforcing valid event types on the `EVENTS` table
- **Q2.1** — `BEFORE INSERT` trigger to validate that underage patrons have a registered guardian
- **Q2.2** — `BEFORE INSERT/UPDATE` trigger enforcing email address requirement for adult patrons
- **Q3.1** — Sequence (`ITEM_ID_SEQ`) for generating 10-digit item IDs
- **Q3.2** — `BEFORE INSERT` trigger auto-generating item IDs with checksum validation (`UQ` prefix + 10-digit sequence + checksum digit)
- **Q3.3** — Querying system sequences from `pg_sequences`
- **Q4.1** — `BEFORE INSERT` trigger auto-populating loss charges from the `WORKS` table
- **Q4.2** — `BEFORE INSERT` trigger auto-inserting missing return events when a new loan is recorded
- **Q4.3** — `BEFORE INSERT` trigger enforcing hold business rules (no duplicate holds, lost items can't be held, dynamic timestamp calculation based on current loan status)

## Assignment 2 — Views, Indexes & Query Optimisation

**File:** `assignment2_views_indexes_transactions.sql`

- **Q1.1** — View (`V_POPULAR_GENRES`) for top 5 most loaned/held genres with `EXPLAIN ANALYZE`
- **Q1.2** — View (`V_COSTS_INCURRED`) using CTEs to find top 5 patrons by loss charges, with guardian responsibility logic
- **Q1.3** — Materialised view (`MV_COSTS_INCURRED`) version of the above for performance
- **Q2.1** — Composite index on `EVENTS(event_type, item_id)` and query plan comparison
- **Q2.2** — Functional index on author surname extracted via `REGEXP_REPLACE`
- **Q3** — Sequential scan vs index scan comparison using `enable_seqscan` / `enable_indexscan` flags
- **Q4** — Transaction management for concurrent hold and loan events

## Tech Stack

- PostgreSQL
- PL/pgSQL (stored functions and triggers)
- CTEs, views, materialised views
- Query planning with EXPLAIN ANALYZE
