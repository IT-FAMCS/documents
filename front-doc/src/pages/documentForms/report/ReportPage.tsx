import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

export const ReportPage = () => {
  interface Report {
    dateFrom: Dayjs | null;
    text: string;
    approver: string;
  }

  const [dateFrom, setDateFrom] = useState<Dayjs | null>(dayjs());
  const [text, setText] = useState('');
  const [approver, setApprover] = useState('Замдекана');

  const approverList = ['Замдекана', 'Декан', 'ГСБ'];

  const handleDateFromChange = (newDate: Dayjs | null) => {
    setDateFrom(newDate);
  };

  const handleApproverChange = (event: SelectChangeEvent) => {
    setApprover(event.target.value as string);
  };

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSendData = () => {
    const report: Report = {
      dateFrom,
      text,
      approver
    };
    console.log(report);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" gap={2} width="100%" alignItems={'flex-start'}>
        <DatePicker label="Начало" value={dateFrom} onChange={(newValue) => handleDateFromChange(newValue)} />
        <TextField
          multiline
          fullWidth
          label="Текст докладной"
          placeholder="В связи подготовкой к мероприятиям, проводимым Творческим союзом
              ФПМИ, факультет прикладной математики и информатики просит разрешить 
              проводить репетиции на балконе 5 этажа главного корпуса БГУ."
          onChange={handleTextChange}
        />
        <Select label="Кому" value={approver} onChange={handleApproverChange} fullWidth>
          {approverList.map((appr) => (
            <MenuItem key={appr} value={appr}>
              {appr}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={handleSendData} variant="outlined" sx={{ mt: 2, width: '100%' }}>
          Сгенерировать документ
        </Button>
      </Box>
    </LocalizationProvider>
  );
};
