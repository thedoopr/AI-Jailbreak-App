
export enum Technique {
  Default = 'default',
  PersonaBasic = 'persona_basic',
  FictionalWriter = 'fictional_writer',
  DevModeV1 = 'dev_mode_v1',
  LeetspeakTask = 'leetspeak_task',
  OmegaProtocol = 'omega_protocol',
  UserDefinedBase = 'user_defined_base',
  RandomStrong = 'random_strong',
}

export interface TechniqueOption {
  value: Technique;
  label: string;
}
