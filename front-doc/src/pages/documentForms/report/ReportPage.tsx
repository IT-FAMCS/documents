import {
  Box,
  Button,
  Checkbox,
  Chip,
  Collapse,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ReportPage = () => {
  interface Report {
    approver: string;
    sender: string;
    firstPrefix: string;
    event: string;
    eventOrg: string;
    secondPrefix: string;
    action: string;
    auds: AudotoryInfo[];
  }
  interface AudotoryInfo {
    number: number;
    days: string[];
    timeFrom: Dayjs | null;
    timeTo: Dayjs | null;
    allWeek: boolean;
  }
  const [auditories, setAuditories] = useState<AudotoryInfo[]>([]);
  const [approver, setApprover] = useState('Замдекана');
  const [sender, setSender] = useState('');
  const [firstPrefix, setFirstPrefix] = useState('В связи с ');
  const [event, setEvent] = useState('');
  const [eventOrg, setEventOrg] = useState('');
  const [secondPrefix, setSecondPrefix] = useState('просит Вас ');
  const [action, setAction] = useState('');

  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];

  const approverList = ['Замдекана', 'Декан', 'ГСБ'];

  const handleSecondPrefixChange = (e: any) => {
    setSecondPrefix(e.target.value);
  };

  const handleApproverChange = (event: any) => {
    setApprover(event.target.value as string);
  };

  const handleAddAud = () => {
    const newAuds = [...auditories];
    const aud = {
      number: 1,
      days: [],
      timeFrom: null,
      timeTo: null,
      allWeek: true
    };
    newAuds.push(aud);
    setAuditories(newAuds);
  };
  const handleDeleteAud = () => {
    const newAuds = [...auditories];
    newAuds.pop();
    setAuditories(newAuds);
  };

  const handleEventChange = (e: any) => {
    setEvent(e.target.value);
  };

  const handleEventOrgChange = (e: any) => {
    setEventOrg(e.target.value);
  };

  const handleFirstPrefixChange = (e: any) => {
    setFirstPrefix(e.target.value);
  };

  const handleSenderChange = (event: any) => {
    setSender(event.target.value);
  };

  const handleActionDescChange = (event: any) => {
    setAction(event.target.value);
  };

  const handleAudNumberChange = (e: any, i: number) => {
    const auds = [...auditories];
    auds[i].number = e.target.value;
    setAuditories(auds);
  };

  const handleAudTimeFromChange = (val: any, i: number) => {
    const auds = [...auditories];
    auds[i].timeFrom = val;
    setAuditories(auds);
  };

  const handleAudTimeToChange = (val: any, i: number) => {
    const auds = [...auditories];
    auds[i].timeTo = val;
    setAuditories(auds);
  };

  const handleAudDaysChange = (e: SelectChangeEvent<string[]>, i: number) => {
    const auds = [...auditories];
    auds[i].days = e.target.value as string[];
    setAuditories(auds);
  };

  const handleFullWeekChange = (e: any, i: number) => {
    const auds = [...auditories];
    auds[i].allWeek = e.target.checked;
    setAuditories(auds);
  };

  const handleSendData = () => {
    const report: Report = {
      approver,
      sender,
      firstPrefix,
      event,
      eventOrg,
      secondPrefix,
      action,
      auds: auditories
    };
    console.log(report);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'grid',
          flexDirection: 'column',
          gap: 5,
          padding: 5,
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          width: '100%'
        }}
        gap={2}
        padding={5}
      >
        <Box gap={30} sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <FormControl sx={{ m: 1, width: 150 }}>
            <InputLabel>Кому</InputLabel>
            <Select onChange={handleApproverChange}>
              {approverList.map((appr, i) => (
                <MenuItem value={appr} key={i}>
                  {appr}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ width: 650 }}
            value={sender}
            label="От кого"
            variant="outlined"
            onInput={handleSenderChange}
          />
        </Box>
        <Box gap={2} sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <TextField
            sx={{
              minWidth: 120
            }}
            label="Предлог"
            value={firstPrefix}
            onChange={handleFirstPrefixChange}
            placeholder="началом проведения дополнительных занятий по дисциплинам, преподаваемым на факультете, основной целью которых является закрепление полученных знаний и изучение прикладного применения дисциплин"
          />
          <TextField
            label="Мероприятие"
            value={event}
            onChange={handleEventChange}
            multiline={true}
            rows={4}
            fullWidth
            placeholder="началом проведения дополнительных занятий по дисциплинам, преподаваемым на факультете, основной целью которых является закрепление полученных знаний и изучение прикладного применения дисциплин"
          />
          <TextField
            label="Организатор"
            value={eventOrg}
            onChange={handleEventOrgChange}
            multiline={true}
            rows={4}
            fullWidth
            placeholder="Студенческий Совет по качеству образования и науки ФПМИ"
          />
          <TextField
            sx={{
              minWidth: 120
            }}
            label="Обращение"
            value={secondPrefix}
            onChange={handleSecondPrefixChange}
            placeholder="началом проведения дополнительных занятий по дисциплинам, преподаваемым на факультете, основной целью которых является закрепление полученных знаний и изучение прикладного применения дисциплин"
          />
          <TextField
            label="Что сделать"
            value={action}
            onChange={handleActionDescChange}
            fullWidth
            multiline={true}
            rows={4}
            placeholder=" выделить для проведения занятий"
          />
        </Box>
        <Box gap={2} sx={{ width: '100%', display: 'flex', alignItems: 'center', direction: 'row' }}>
          <Button onClick={handleAddAud} variant="outlined" sx={{ width: '50%' }}>
            <AddIcon />
          </Button>
          <Button onClick={handleDeleteAud} variant="outlined" sx={{ width: '50%' }} disabled={auditories.length === 0}>
            <RemoveIcon />
          </Button>
        </Box>
        {auditories.map((aud, i) => (
          <Box key={i} sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <TextField
              onChange={(event) => handleAudNumberChange(event, i)}
              label="Номер аудитории"
              value={aud.number}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            ></TextField>
            <TimePicker
              onChange={(newValue) => handleAudTimeFromChange(newValue, i)}
              sx={{
                maxWidth: 120
              }}
              label="Начало"
              ampm={false}
              value={aud.timeFrom}
            />
            <TimePicker
              onChange={(newValue) => handleAudTimeToChange(newValue, i)}
              sx={{
                maxWidth: 120
              }}
              label="Конец"
              ampm={false}
              value={aud.timeTo}
            />
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select
                disabled={aud.allWeek}
                onChange={(event) => handleAudDaysChange(event, i)}
                multiple
                value={aud.days}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {daysOfWeek.map((day, i) => (
                  <MenuItem key={i} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={aud.allWeek}
                  onChange={(event) => handleFullWeekChange(event, i)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Вся неделя"
            />
          </Box>
        ))}
        <Button onClick={handleSendData} variant="outlined" sx={{ mt: 2, width: 300 }}>
          Сгенерировать документ
        </Button>
      </Box>
    </LocalizationProvider>
  );
};
