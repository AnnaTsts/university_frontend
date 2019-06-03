import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StudentMark} from '@models/student-mark';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.scss']
})
export class TeachersTableComponent implements OnInit {
  @Input() groupId: number;

  constructor(private route: ActivatedRoute) {
  }

  @ViewChild('table') public table: ElementRef;

  dataToWork: StudentMark[][];
  receivedData: StudentMark[][] = [
    [
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student1',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 1,
        NameOfWork: 'test',
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 2,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 3,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 4,
        NameOfWork: null,
        DateTime: new Date()
      }
    ],
    [
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student2',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student2',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 1,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student2',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 1,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student2',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 2,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student2',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 3,
        NameOfWork: null,
        DateTime: new Date()
      },
    ],
    [
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student3',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student3',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 1,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student3',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 2,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 3,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student3',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student3',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 4,
        NameOfWork: null,
        DateTime: new Date()
      }
    ],
    [
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student4',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student4',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 1,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student4',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 2,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student4',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 3,
        NameOfWork: null,
        DateTime: new Date()
      },
      {
        Id: 1,
        ApplicationUserId: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
        Student: {
          Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
          UserName: 'student4',
          Email: 'petr@petrov',
          Password: null,
          ChairId: 1,
          Chair: {
            Id: 1,
            Name: 'ASOIY',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            }
          },
          GroupId: 1
        },
        TeacherSubjectId: 1,
        TeacherSubject: {
          Id: 1,
          TeacherId: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
          SubjectId: 1,
          GroupId: 1,
          Semester: 5,
          Teacher: {
            Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
            UserName: 'teacher',
            Email: 'iv@iv',
            Password: null,
            ChairId: 1,
            Chair: {
              Id: 1,
              Name: 'ASOIY',
              FacultyId: 1,
              Faculty: {
                Id: 1,
                Name: 'FIOT'
              }
            },
            GroupId: 1
          },
          Group: {
            Id: 1,
            Name: 'IP-61',
            FacultyId: 1,
            Faculty: {
              Id: 1,
              Name: 'FIOT'
            },
            SpecializationId: 1,
            Specialization: {
              Id: 1,
              Name: 'keeeeeek'
            },
            Students: [
              {
                Id: 'fd7e1d97-3101-40a8-a815-c22d537585e7',
                UserName: 'student4',
                Email: 'petr@petrov',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              },
              {
                Id: 'd7cc762c-12a0-4277-8ef4-a0361b1bd444',
                UserName: 'teacher',
                Email: 'iv@iv',
                Password: null,
                ChairId: 1,
                Chair: {
                  Id: 1,
                  Name: 'ASOIY',
                  FacultyId: 1,
                  Faculty: {
                    Id: 1,
                    Name: 'FIOT'
                  }
                },
                GroupId: 1
              }
            ]
          },
          Subject: {
            Id: 1,
            Name: 'Math'
          }

        },
        Mark: 4,
        NameOfWork: null,
        DateTime: new Date()
      }
    ],
  ];

  ngOnInit() {
    const currentGroupId = this.route.snapshot.paramMap.get('id');
    console.log(currentGroupId);


    this.dataToWork = JSON.parse(JSON.stringify(this.receivedData));

  }

  addNewMark() {
    const firstRecord = this.dataToWork[0][0];
    for (let i = 0; i < this.dataToWork.length; i++) {
      const emptyMark: StudentMark = {
        Id: firstRecord.Id,
        ApplicationUserId: firstRecord.ApplicationUserId,
        Student: firstRecord.Student,
        TeacherSubjectId: firstRecord.TeacherSubjectId,
        TeacherSubject: firstRecord.TeacherSubject,
        Mark: -1,
        NameOfWork: null,
        DateTime: new Date()
      };
      this.dataToWork[i].push(emptyMark);

    }
    this.table.nativeElement.scrollIntoView({behavior: 'smooth', inline: 'end'});
  }

  save() {
    console.log(this.dataToWork);
  }
}
