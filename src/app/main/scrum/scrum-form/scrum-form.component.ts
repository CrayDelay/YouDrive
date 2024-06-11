import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-scrum-form',
  templateUrl: './scrum-form.component.html',
  styleUrls: ['./scrum-form.component.scss']
})
export class ScrumFormComponent implements OnInit {

  public project = [
    {
      content: "Devops team",
      selected: true,
    },
    {
      content: "Kubernetes Cluster"
    },
    {
      content: "Engineering"
    },
    {
      content: "Frontend"
    }
  ]

  public issueType = [
    {
      content: "Задача",
      selected: true,
    },
    {
      content: "Проблема"
    },
  ]

  public sprint = [
    {
      content: "Current",
    },
    {
      content: "W-30"
    },
  ]


  public priority = [
    {
      content: "Високий",
    },
    {
      content: "Низький"
    },
  ]

  public assignee = [
    {
      content: "Богдан Когутницький",
    },
    {
      content: "Test Asignee 2"
    },
  ]

  public reported = [
    {
      content: "Богдан Когутницький",
    },
    {
      content: "Test Reporter 2 "
    },
  ]



  constructor(private dialogRef: MatDialogRef<ScrumFormComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

}
