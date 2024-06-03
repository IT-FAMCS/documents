import { Box, Button, Checkbox, Chip, FormControl, FormControlLabel, InputAdornment, InputLabel, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, useTheme } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ReleasePage = () => {

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 100 * 4.5 + 5,
                width: 250,
            },
        },
    };

    interface Release {
        date: Dayjs | null;
        timeFrom: Dayjs | null;
        timeTo: Dayjs | null;
        fullDay: boolean;
        members: string[];
        military: boolean;
    }

    const blankData = {
      date: dayjs("2022-04-01"),
      timeFrom: dayjs("2022-04-17T8:15"),
      timeTo: dayjs("2022-04-17T14:20"),
      fullDay: false,
      members: [],
      military: false
    }

    const [isMilitary, setIsMilitary] = useState(false)
    const [title, setTitle] = useState('')
    const [responsible, setResponsible] = useState('')
    const [releaseData, setReleaseData] = useState<Release[]>([blankData])

    const handleDateChange = (index: number, newDate: Dayjs | null) => {
        const newData = [...releaseData]
        newData[index].date = newDate
        setReleaseData(newData)
    }
    const handleTimeFromChange = (index: number, newTime: Dayjs | null) => {
        const newData = [...releaseData]
        newData[index].timeFrom = newTime
        setReleaseData(newData)
    }
    const handleTimeToChange = (index: number, newTime: Dayjs | null) => {
        const newData = [...releaseData]
        newData[index].timeTo = newTime
        setReleaseData(newData)
    }

    const handleFullDayChange = (index: number, event: any) => {
        const newData = [...releaseData];
        newData[index].fullDay = event.target.checked;
        setReleaseData(newData);
    };

    
    const handleMilitaryChange = (index: number, event: any) => {
      const newData = [...releaseData];
      newData[index].military = event.target.checked;
      setReleaseData(newData);
  };

    const handleMembersChange = (index: number, event: SelectChangeEvent<string[]>) => {
        const newMembers = event.target.value as string[];
        const newData = [...releaseData];
        newData[index].members = newMembers;
        setReleaseData(newData);
    };

    const handleSendData = () => {
        console.log({
          dates: releaseData, 
          ismilitary: isMilitary, 
          title: title, 
          responsible: responsible
        })
    }

    const handleAddDate = () => {
        const newData = [...releaseData]
        newData.push(blankData)
        setReleaseData(newData)
    }

    const handleDeleteDate = () => {
      const newData = [...releaseData]
      newData.pop()
      setReleaseData(newData)
    }

    const handleTitleChange = (event: any) => {
      setTitle(event.target.value)
    }

    const handleResponsibleChange = (event: any) => {
      setResponsible(event.target.value)
    }

    const members = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {releaseData.map((release, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
              <DatePicker
                label="Дата освобождения"
                value={release.date}
                onChange={(newDate) => handleDateChange(index, newDate)}
                format='DD/MM/YYYY'
              />
              <TimePicker
                sx={{
                  maxWidth: 120
                }}
                label="Начало"
                ampm={false}
                value={release.timeFrom}
                disabled={release.fullDay}
                onChange={(newValue) => handleTimeFromChange(index, newValue)}
              />
              <TimePicker
                sx={{
                  maxWidth: 120
                }}
                label="Конец"
                ampm={false}
                disabled={release.fullDay}
                value={release.timeTo}
                onChange={(newValue) => handleTimeToChange(index, newValue)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={release.fullDay}
                    onChange={(event) => handleFullDayChange(index, event)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label="Весь день"
              />
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id={`demo-multiple-chip-label-${index}`}>Chip</InputLabel>
                <Select
                  labelId={`demo-multiple-chip-label-${index}`}
                  id={`demo-multiple-chip-${index}`}
                  multiple
                  value={release.members}
                  onChange={(event) => handleMembersChange(index, event)}
                  input={
                    <OutlinedInput id={`select-multiple-chip-${index}`} label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                      <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                {members.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          ))}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Button
            onClick={handleAddDate}
            variant='outlined'
            sx={{ width: '50%' }}
          >
            <AddIcon />
          </Button>
          <Button
            onClick={handleDeleteDate}
            variant='outlined'
            sx={{ width: '50%' }}
          >
            <RemoveIcon />
          </Button>
          
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isMilitary}
                onChange={(event) => setIsMilitary(event.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Для военки"
            sx={{ mt: 2 }}
          />
          <TextField
            label='Название мероприятия'
            value={title}
            onChange={handleTitleChange}
            sx={{ mt: 2, width: 300}}
          />
          <TextField
            label='Подписывает'
            value={responsible}
            onChange={handleResponsibleChange}
            sx={{ mt: 2, width: 300}}
          />
          <Button
            onClick={handleSendData}
            variant='outlined'
            sx={{ mt: 2, width: 300 }}
          >
            Сгенерировать документ
          </Button>
        </Box>
      </LocalizationProvider>
    );
};
