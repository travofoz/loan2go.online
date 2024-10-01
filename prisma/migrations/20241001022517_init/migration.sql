-- CreateTable
CREATE TABLE "LoanApplication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "loan_amount" TEXT NOT NULL,
    "loan_purpose" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "residence_length" TEXT NOT NULL,
    "employer" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "employer_phone" TEXT NOT NULL,
    "hire_date" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "routing_number" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "bank_length" TEXT NOT NULL,
    "direct_deposit" TEXT NOT NULL,
    "tcpa" TEXT NOT NULL,
    "tcpa_phone" TEXT,
    "accept_terms" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "company" TEXT,
    "role" TEXT,
    "otherRole" TEXT,
    "bestTimeToContact" TEXT,
    "howDidYouHearAboutUs" TEXT,
    "otherSource" TEXT,
    "subject" TEXT,
    "optIn" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL
);
