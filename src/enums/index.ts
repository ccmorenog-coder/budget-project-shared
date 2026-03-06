import { z } from 'zod';

/**
 * Roles de usuario dentro del sistema.
 */
export enum UserRole {
  USER = 'USER',
  SUPER_ADMIN = 'SUPER_ADMIN',
  STATS_VIEWER = 'STATS_VIEWER',
}
export const UserRoleSchema = z.nativeEnum(UserRole);

/**
 * Nivel de detalle/experiencia del usuario en la plataforma.
 */
export enum UserMode {
  BASIC = 'BASIC',
  DETAILED = 'DETAILED',
}
export const UserModeSchema = z.nativeEnum(UserMode);

/**
 * Tipos de contrato laboral según legislación colombiana.
 */
export enum ContractType {
  EMPLOYEE = 'EMPLOYEE',
  CONTRACTOR = 'CONTRACTOR',
  PENSIONER = 'PENSIONER',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
}
export const ContractTypeSchema = z.nativeEnum(ContractType);

/**
 * Frecuencia de pago de salario.
 */
export enum SalaryFrequency {
  MONTHLY = 'MONTHLY',
  BIWEEKLY = 'BIWEEKLY',
  WEEKLY = 'WEEKLY',
}
export const SalaryFrequencySchema = z.nativeEnum(SalaryFrequency);

/**
 * Tipos de billeteras o cuentas de dinero.
 */
export enum WalletType {
  BANK = 'BANK',
  CASH = 'CASH',
  DIGITAL = 'DIGITAL',
  LOW_VALUE_DEPOSIT = 'LOW_VALUE_DEPOSIT',
}
export const WalletTypeSchema = z.nativeEnum(WalletType);

/**
 * Tipos de transacciones financieras permitidas.
 */
export enum WalletTransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER_OUT = 'TRANSFER_OUT',
  TRANSFER_IN = 'TRANSFER_IN',
  CASH_WITHDRAWAL = 'CASH_WITHDRAWAL',
  CASH_DEPOSIT = 'CASH_DEPOSIT',
  GMF_TX = 'GMF_TX',
  INVESTMENT_OUT = 'INVESTMENT_OUT',
  INVESTMENT_IN = 'INVESTMENT_IN',
  ADJUSTMENT = 'ADJUSTMENT',
}
export const WalletTransactionTypeSchema = z.nativeEnum(WalletTransactionType);

/**
 * Canales para retiros de efectivo.
 */
export enum CashWithdrawalChannel {
  ATM = 'ATM',
  BANKING_AGENT = 'BANKING_AGENT',
  TELLER = 'TELLER',
  OTHER = 'OTHER',
}
export const CashWithdrawalChannelSchema = z.nativeEnum(CashWithdrawalChannel);

/**
 * Tipos de ingresos permitidos (incluye dominios colombianos como PRIMA).
 */
export enum IncomeType {
  SALARY = 'SALARY',
  PRIMA = 'PRIMA',
  COMMISSION = 'COMMISSION',
  LEGAL_TRANSPORT_AID = 'LEGAL_TRANSPORT_AID',
  LEGAL_CONNECTIVITY_AID = 'LEGAL_CONNECTIVITY_AID',
  EXTRALEGAL_CONNECTIVITY_AID = 'EXTRALEGAL_CONNECTIVITY_AID',
  PROFESSIONAL_FEES = 'PROFESSIONAL_FEES',
  PENSION = 'PENSION',
  DISABILITY_LEAVE = 'DISABILITY_LEAVE',
  VACATION_PAY = 'VACATION_PAY',
  OTHER = 'OTHER',
}
export const IncomeTypeSchema = z.nativeEnum(IncomeType);

/**
 * Periodicidad para gastos recurrentes.
 */
export enum RecurrencePeriod {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}
export const RecurrencePeriodSchema = z.nativeEnum(RecurrencePeriod);

/**
 * Métodos de pago.
 */
export enum PaymentMethod {
  CASH = 'CASH',
  CARD = 'CARD',
  TRANSFER = 'TRANSFER',
}
export const PaymentMethodSchema = z.nativeEnum(PaymentMethod);

/**
 * Tipos de tasas de interés (EA, MV, etc.).
 */
export enum InterestRateType {
  EA = 'EA',
  MV = 'MV',
  TV = 'TV',
  NOMINAL_MONTHLY = 'NOMINAL_MONTHLY',
  OTHER = 'OTHER',
}
export const InterestRateTypeSchema = z.nativeEnum(InterestRateType);

/**
 * Fuente de la tasa de interés.
 */
export enum RateSource {
  USER_INPUT = 'USER_INPUT',
  ADMIN_REFERENCE = 'ADMIN_REFERENCE',
  RECONCILIATION = 'RECONCILIATION',
}
export const RateSourceSchema = z.nativeEnum(RateSource);

/**
 * Tipos de seguros asociados a productos financieros.
 */
export enum InsuranceType {
  FIXED = 'FIXED',
  RATE_ON_BALANCE = 'RATE_ON_BALANCE',
  UNKNOWN = 'UNKNOWN',
}
export const InsuranceTypeSchema = z.nativeEnum(InsuranceType);

/**
 * Tipos de préstamos.
 */
export enum LoanType {
  CONSUMER = 'CONSUMER',
  MORTGAGE = 'MORTGAGE',
  PERSONAL = 'PERSONAL',
  AGRICULTURAL = 'AGRICULTURAL',
  OTHER = 'OTHER',
}
export const LoanTypeSchema = z.nativeEnum(LoanType);

/**
 * Sistemas de amortización.
 */
export enum AmortizationType {
  FRENCH = 'FRENCH',
  GERMAN = 'GERMAN',
}
export const AmortizationTypeSchema = z.nativeEnum(AmortizationType);

/**
 * Frecuencia de pago de obligaciones.
 */
export enum PaymentFrequency {
  MONTHLY = 'MONTHLY',
  BIMONTHLY = 'BIMONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUAL = 'SEMIANNUAL',
  ANNUAL = 'ANNUAL',
  IRREGULAR = 'IRREGULAR',
}
export const PaymentFrequencySchema = z.nativeEnum(PaymentFrequency);

/**
 * Tipos de inversiones.
 */
export enum InvestmentType {
  CDT = 'CDT',
  SAVINGS_POCKET = 'SAVINGS_POCKET',
  OTHER = 'OTHER',
}
export const InvestmentTypeSchema = z.nativeEnum(InvestmentType);

/**
 * Estado de una inversión.
 */
export enum InvestmentStatus {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}
export const InvestmentStatusSchema = z.nativeEnum(InvestmentStatus);

/**
 * Tipos de entidades financieras.
 */
export enum FinancialEntityType {
  BANK = 'BANK',
  COOPERATIVE = 'COOPERATIVE',
  FINTECH = 'FINTECH',
  OTHER = 'OTHER',
}
export const FinancialEntityTypeSchema = z.nativeEnum(FinancialEntityType);

/**
 * Tipos de tasas de referencia de mercado.
 */
export enum ReferenceRateType {
  EA = 'EA',
  MV = 'MV',
  TV = 'TV',
  NOMINAL_MONTHLY = 'NOMINAL_MONTHLY',
}
export const ReferenceRateTypeSchema = z.nativeEnum(ReferenceRateType);

/**
 * Categorías de notificaciones del sistema.
 */
export enum NotificationType {
  TAX_THRESHOLD = 'TAX_THRESHOLD',
  PAYMENT_DUE = 'PAYMENT_DUE',
  RECURRING_EXPENSE_DUE = 'RECURRING_EXPENSE_DUE',
  RECURRING_EXPENSE_OVERDUE = 'RECURRING_EXPENSE_OVERDUE',
  SS_PAYMENT = 'SS_PAYMENT',
  RECONCILE_REMINDER = 'RECONCILE_REMINDER',
  CDT_MATURITY = 'CDT_MATURITY',
  GMF_ALERT = 'GMF_ALERT',
  PRIMA_REMINDER = 'PRIMA_REMINDER',
  ANT_EXPENSE_INSIGHT = 'ANT_EXPENSE_INSIGHT',
  MONTHLY_SUMMARY_EMAIL = 'MONTHLY_SUMMARY_EMAIL',
  REFERENCE_RATE_UPDATED = 'REFERENCE_RATE_UPDATED',
  REFERENCE_RATE_PENDING = 'REFERENCE_RATE_PENDING',
  ENGAGEMENT_NUDGE = 'ENGAGEMENT_NUDGE',
  DBM_INFLOW_WARNING = 'DBM_INFLOW_WARNING',
  DBM_OUTFLOW_WARNING = 'DBM_OUTFLOW_WARNING',
  DBM_GMF_THRESHOLD = 'DBM_GMF_THRESHOLD',
  FISCAL_PARAMS_PENDING = 'FISCAL_PARAMS_PENDING',
}
export const NotificationTypeSchema = z.nativeEnum(NotificationType);

/**
 * Canales de comunicación para notificaciones.
 */
export enum NotificationChannel {
  PUSH = 'PUSH',
  EMAIL = 'EMAIL',
  IN_APP = 'IN_APP',
}
export const NotificationChannelSchema = z.nativeEnum(NotificationChannel);

/**
 * Acciones de auditoría.
 */
export enum AuditAction {
  SELECT = 'SELECT',
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
export const AuditActionSchema = z.nativeEnum(AuditAction);

/**
 * Tipo de cambio realizado en registros financieros.
 */
export enum ChangeType {
  CORRECTION = 'CORRECTION',
  ADJUSTMENT = 'ADJUSTMENT',
}
export const ChangeTypeSchema = z.nativeEnum(ChangeType);

/**
 * Causas de diferencias en la conciliación bancaria.
 */
export enum ReconciliationDiffType {
  UNREGISTERED_EXPENSE = 'UNREGISTERED_EXPENSE',
  UNREGISTERED_INCOME = 'UNREGISTERED_INCOME',
  BANK_COMMISSION = 'BANK_COMMISSION',
  GMF_NOT_RECORDED = 'GMF_NOT_RECORDED',
  CDT_PENDING = 'CDT_PENDING',
  ROUNDING_ERROR = 'ROUNDING_ERROR',
  UNIDENTIFIED_FAVORABLE = 'UNIDENTIFIED_FAVORABLE',
  UNIDENTIFIED_UNFAVORABLE = 'UNIDENTIFIED_UNFAVORABLE',
  ADJUSTMENT = 'ADJUSTMENT',
}
export const ReconciliationDiffTypeSchema = z.nativeEnum(ReconciliationDiffType);
